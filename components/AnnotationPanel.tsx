'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import ReactMarkdown from 'react-markdown';
import type { SessionUser } from '@/lib/auth';

type Category = 'interpretation' | 'internal_policy' | 'examiner_guidance' | 'open_question';

interface AnnotationAuthor {
  id: string;
  name: string | null;
  email: string;
}

interface AnnotationRecord {
  id: string;
  section_id: string;
  user_id: string;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
  user: AnnotationAuthor;
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

export default function AnnotationPanel({ sectionId }: Props) {
  const { data: session, status } = useSession();
  const [collapsed, setCollapsed] = useState(true);
  const [annotations, setAnnotations] = useState<AnnotationRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [formContent, setFormContent] = useState('');
  const [formCategory, setFormCategory] = useState<Category>('interpretation');
  const [formSaving, setFormSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const user = session?.user as SessionUser | undefined;
  const isAuthenticated = status === 'authenticated' && !!user?.org_id;

  const fetchAnnotations = useCallback(async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/annotations?section_id=${encodeURIComponent(sectionId)}`);
      if (res.ok) {
        const data = await res.json();
        setAnnotations(data.annotations ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, sectionId]);

  useEffect(() => {
    if (!collapsed && isAuthenticated) {
      fetchAnnotations();
    }
  }, [collapsed, isAuthenticated, fetchAnnotations]);

  function resetForm() {
    setFormContent('');
    setFormCategory('interpretation');
    setFormError('');
    setEditingId(null);
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formContent.trim()) {
      setFormError('Content is required');
      return;
    }
    setFormSaving(true);
    setFormError('');

    try {
      if (editingId) {
        // Update existing
        const res = await fetch(`/api/annotations/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: formContent, category: formCategory }),
        });
        if (!res.ok) {
          const d = await res.json();
          setFormError(d.error ?? 'Update failed');
          return;
        }
      } else {
        // Create new
        const res = await fetch('/api/annotations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ section_id: sectionId, content: formContent, category: formCategory }),
        });
        if (!res.ok) {
          const d = await res.json();
          setFormError(d.error ?? 'Save failed');
          return;
        }
      }
      resetForm();
      fetchAnnotations();
    } finally {
      setFormSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this annotation?')) return;
    await fetch(`/api/annotations/${id}`, { method: 'DELETE' });
    setAnnotations(prev => prev.filter(a => a.id !== id));
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
        onClick={() => setCollapsed(c => !c)}
        className="flex items-center justify-center h-10 w-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 border-b border-slate-200 shrink-0 transition-colors"
        title={collapsed ? 'Open annotation panel' : 'Collapse annotation panel'}
      >
        {collapsed ? (
          <span className="text-xs writing-mode-vertical flex flex-col items-center gap-1">
            <span className="text-slate-500">✏</span>
            {count > 0 && (
              <span className="text-[10px] bg-blue-100 text-blue-700 rounded-full px-1 font-medium">
                {count}
              </span>
            )}
          </span>
        ) : (
          <span className="text-xs text-slate-400">✕</span>
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
              {user?.org_name && (
                <p className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[180px]">
                  {user.org_name}
                </p>
              )}
            </div>
            {count > 0 && (
              <span className="text-[10px] bg-slate-100 text-slate-500 rounded-full px-1.5 py-0.5 font-medium">
                {count}
              </span>
            )}
          </div>

          {/* Not authenticated */}
          {!isAuthenticated && (
            <div className="p-4 text-center">
              <p className="text-xs text-slate-500 mb-2">Sign in to add private notes.</p>
              <a
                href="/auth/signin"
                className="inline-block text-xs text-blue-600 hover:underline border border-blue-200 rounded px-2.5 py-1 hover:bg-blue-50 transition-colors"
              >
                Sign in
              </a>
            </div>
          )}

          {/* Authenticated */}
          {isAuthenticated && (
            <>
              {/* Annotation list */}
              <div className="flex-1 p-2 space-y-2">
                {loading && (
                  <p className="text-xs text-slate-400 text-center py-4">Loading…</p>
                )}
                {!loading && annotations.length === 0 && !showForm && (
                  <p className="text-xs text-slate-400 italic text-center py-4">
                    No notes yet for {sectionId}.
                  </p>
                )}
                {annotations.map(a => (
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
                      <span>{a.user.name ?? a.user.email} · {formatDate(a.created_at)}</span>
                      {a.user_id === user?.id && (
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
                      )}
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
                    onChange={e => setFormCategory(e.target.value as Category)}
                    className="w-full text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
                  >
                    {(Object.entries(CATEGORY_LABELS) as [Category, string][]).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <textarea
                    value={formContent}
                    onChange={e => setFormContent(e.target.value)}
                    placeholder="Markdown supported…"
                    rows={5}
                    className="w-full text-xs border border-slate-200 rounded px-2 py-1.5 font-mono resize-y focus:outline-none focus:ring-1 focus:ring-blue-300 placeholder:text-slate-300"
                  />

                  {formError && (
                    <p className="text-[10px] text-red-500">{formError}</p>
                  )}

                  <div className="flex gap-1.5">
                    <button
                      type="submit"
                      disabled={formSaving}
                      className="flex-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded py-1.5 font-medium transition-colors disabled:opacity-60"
                    >
                      {formSaving ? 'Saving…' : 'Save'}
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
            </>
          )}
        </div>
      )}
    </div>
  );
}
