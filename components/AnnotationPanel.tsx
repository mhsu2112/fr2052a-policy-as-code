'use client';

import { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

type Category = 'interpretation' | 'internal_policy' | 'examiner_guidance' | 'open_question';

interface AnnotationRecord {
  id: string;
  section_id: string;
  user_id: string;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
  user: { id: string; name: string | null; email: string };
}

interface Props {
  sectionId: string;
}

const CATEGORY_LABELS: Record<Category, string> = {
  interpretation: 'Interpretation',
  internal_policy: 'Internal Policy',
  examiner_guidance: 'Examiner Guidance',
  open_question: 'Open Question',
};

const CATEGORY_COLORS: Record<Category, string> = {
  interpretation: 'bg-blue-500',
  internal_policy: 'bg-slate-500',
  examiner_guidance: 'bg-amber-500',
  open_question: 'bg-violet-500',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/* ---------- Demo seed annotations ---------- */
const DEMO_USER = { id: 'demo-user', name: 'Demo User', email: 'demo@example.com' };

const SEED_ANNOTATIONS: Record<string, Omit<AnnotationRecord, 'section_id'>[]> = {
  'I.A.1': [
    {
      id: 'seed-1',
      user_id: DEMO_USER.id,
      content: 'For secured funding transactions, confirm whether the maturity date or the **earliest possible call date** should be used when the counterparty has optionality.',
      category: 'open_question',
      created_at: '2025-03-15T10:30:00Z',
      updated_at: '2025-03-15T10:30:00Z',
      user: DEMO_USER,
    },
    {
      id: 'seed-2',
      user_id: DEMO_USER.id,
      content: 'Internal policy: map all tri-party repo to this item if collateral is Level 1 HQLA and counterparty is a financial institution.',
      category: 'internal_policy',
      created_at: '2025-03-10T14:00:00Z',
      updated_at: '2025-03-10T14:00:00Z',
      user: DEMO_USER,
    },
  ],
  'I.A.2': [
    {
      id: 'seed-3',
      user_id: DEMO_USER.id,
      content: 'Examiner focus area: ensure the 30-day maturity bucketing aligns with the contractual terms, not behavioral assumptions.',
      category: 'examiner_guidance',
      created_at: '2025-02-20T09:15:00Z',
      updated_at: '2025-02-20T09:15:00Z',
      user: DEMO_USER,
    },
  ],
  'O.A.1': [
    {
      id: 'seed-4',
      user_id: DEMO_USER.id,
      content: 'Interpretation: "stable" retail deposits should be reported here only when the institution has **empirical evidence** of deposit stability through at least one stress period.',
      category: 'interpretation',
      created_at: '2025-03-18T16:45:00Z',
      updated_at: '2025-03-18T16:45:00Z',
      user: DEMO_USER,
    },
  ],
  'O.A.2': [
    {
      id: 'seed-5',
      user_id: DEMO_USER.id,
      content: 'Cross-reference with FR 2052a FAQ #14 on treatment of brokered deposits with maturity > 30 days.',
      category: 'interpretation',
      created_at: '2025-01-22T11:00:00Z',
      updated_at: '2025-01-22T11:00:00Z',
      user: DEMO_USER,
    },
  ],
  'S.A.1': [
    {
      id: 'seed-6',
      user_id: DEMO_USER.id,
      content: 'Ensure supplemental data captures off-balance-sheet commitments that could convert to on-balance-sheet in a stress scenario.',
      category: 'internal_policy',
      created_at: '2025-03-01T08:30:00Z',
      updated_at: '2025-03-01T08:30:00Z',
      user: DEMO_USER,
    },
  ],
};

let _nextId = 100;
function genId() {
  return `demo-${++_nextId}`;
}

/* -------------------------------------------------- */

export default function AnnotationPanel({ sectionId }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const [annotations, setAnnotations] = useState<AnnotationRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [formContent, setFormContent] = useState('');
  const [formCategory, setFormCategory] = useState<Category>('interpretation');
  const [formError, setFormError] = useState('');

  // Load seed annotations for this section
  useEffect(() => {
    const seeds = (SEED_ANNOTATIONS[sectionId] ?? []).map((a) => ({
      ...a,
      section_id: sectionId,
    }));
    setAnnotations(seeds);
  }, [sectionId]);

  function resetForm() {
    setFormContent('');
    setFormCategory('interpretation');
    setFormError('');
    setEditingId(null);
    setShowForm(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formContent.trim()) {
      setFormError('Content is required');
      return;
    }

    const now = new Date().toISOString();

    if (editingId) {
      setAnnotations((prev) =>
        prev.map((a) =>
          a.id === editingId
            ? { ...a, content: formContent, category: formCategory, updated_at: now }
            : a
        )
      );
    } else {
      const newAnnotation: AnnotationRecord = {
        id: genId(),
        section_id: sectionId,
        user_id: DEMO_USER.id,
        content: formContent,
        category: formCategory,
        created_at: now,
        updated_at: now,
        user: DEMO_USER,
      };
      setAnnotations((prev) => [newAnnotation, ...prev]);
    }

    resetForm();
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this annotation?')) return;
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }

  function handleEdit(a: AnnotationRecord) {
    setEditingId(a.id);
    setFormContent(a.content);
    setFormCategory(a.category as Category);
    setFormError('');
    setShowForm(true);
  }

  const count = annotations.length;

  return (
    <div
      className={`shrink-0 border-l border-slate-200 bg-white flex flex-col transition-all duration-200 ${
        collapsed ? 'w-10' : 'w-72'
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="flex items-center justify-center h-10 w-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 border-b border-slate-200 shrink-0 transition-colors"
        title={collapsed ? 'Open annotation panel' : 'Collapse annotation panel'}
      >
        {collapsed ? (
          <span className="text-xs writing-mode-vertical flex flex-col items-center gap-1">
            <span className="text-slate-500">&#9998;</span>
            {count > 0 && (
              <span className="text-[10px] bg-blue-100 text-blue-700 rounded-full px-1 font-medium">
                {count}
              </span>
            )}
          </span>
        ) : (
          <span className="text-xs text-slate-400">&times;</span>
        )}
      </button>

      {/* Panel content */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto flex flex-col">
          <div className="p-3 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Notes
              </h3>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Demo Mode
              </p>
            </div>
            {count > 0 && (
              <span className="text-[10px] bg-slate-100 text-slate-500 rounded-full px-1.5 py-0.5 font-medium">
                {count}
              </span>
            )}
          </div>

          {/* Demo info banner */}
          <div className="mx-2 mt-2 px-2 py-1.5 rounded bg-amber-50 border border-amber-200">
            <p className="text-[10px] text-amber-700 leading-relaxed">
              Annotations are interactive in this demo. In production, users would sign in
              and notes would be scoped to their organization.
            </p>
          </div>

          {/* Annotation list */}
          <div className="flex-1 p-2 space-y-2">
            {annotations.length === 0 && !showForm && (
              <p className="text-xs text-slate-400 italic text-center py-4">
                No notes yet for {sectionId}.
              </p>
            )}
            {annotations.map((a) => (
              <div
                key={a.id}
                className="bg-slate-50 rounded border border-slate-200 p-2.5 text-xs"
              >
                <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                  <span
                    className={`px-1.5 py-0.5 rounded text-white text-[10px] font-medium ${
                      CATEGORY_COLORS[a.category as Category] ?? 'bg-slate-400'
                    }`}
                  >
                    {CATEGORY_LABELS[a.category as Category] ?? a.category}
                  </span>
                </div>

                <div className="prose prose-xs max-w-none text-slate-700 leading-relaxed [&_p]:my-0.5 [&_ul]:my-0.5 [&_li]:my-0">
                  <ReactMarkdown>{a.content}</ReactMarkdown>
                </div>

                <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>
                    {a.user.name ?? a.user.email} &middot; {formatDate(a.created_at)}
                  </span>
                  <span className="flex gap-2">
                    <button
                      onClick={() => handleEdit(a)}
                      className="hover:text-blue-500 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="hover:text-red-500 transition-colors"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Add note button */}
          {!showForm && (
            <div className="p-2 border-t border-slate-100 shrink-0">
              <button
                onClick={() => setShowForm(true)}
                className="w-full text-xs text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded py-1.5 transition-colors hover:bg-blue-50"
              >
                + Add note
              </button>
            </div>
          )}

          {/* Form */}
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-100 p-2 shrink-0 space-y-2"
            >
              <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">
                {editingId ? 'Edit note' : 'New note'}
              </p>

              <select
                value={formCategory}
                onChange={(e) => setFormCategory(e.target.value as Category)}
                className="w-full text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
              >
                {(Object.entries(CATEGORY_LABELS) as [Category, string][]).map(
                  ([val, label]) => (
                    <option key={val} value={val}>
                      {label}
                    </option>
                  )
                )}
              </select>

              <textarea
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                placeholder="Markdown supported..."
                rows={5}
                className="w-full text-xs border border-slate-200 rounded px-2 py-1.5 font-mono resize-y focus:outline-none focus:ring-1 focus:ring-blue-300 placeholder:text-slate-300"
              />

              {formError && <p className="text-[10px] text-red-500">{formError}</p>}

              <div className="flex gap-1.5">
                <button
                  type="submit"
                  className="flex-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded py-1.5 font-medium transition-colors"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 text-xs border border-slate-200 text-slate-600 hover:bg-slate-50 rounded py-1.5 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
