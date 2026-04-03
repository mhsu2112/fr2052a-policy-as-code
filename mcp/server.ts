#!/usr/bin/env node
/**
 * FR 2052a MCP Server
 *
 * Exposes 11 tools for AI agents and tools to query the FR 2052a reference content.
 * Run with:  npx tsx mcp/server.ts  (from the project root)
 * Connect via Claude Desktop — see mcp/README.md
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import {
  cmdSearch,
  cmdShow,
  cmdMap,
  cmdFields,
  cmdEnums,
  cmdXref,
  cmdDiff,
  cmdSchema,
  cmdFilter,
  cmdExport,
  cmdGlossary,
} from '../lib/commands/index.js';

const server = new McpServer(
  { name: 'fr2052a-reference', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// ── Helpers ───────────────────────────────────────────────────────────────────

function text(content: unknown): { content: [{ type: 'text'; text: string }] } {
  return {
    content: [{ type: 'text', text: JSON.stringify(content, null, 2) }],
  };
}

// ── Tool: fr2052a_search ──────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_search',
  {
    description:
      'Full-text fuzzy search across all FR 2052a sections. Returns up to 20 ranked matches ' +
      'with section_id, section_name, pillar, category, and a match_context excerpt.',
    inputSchema: {
      q: z.string().describe('Search query (e.g. "HQLA", "unencumbered assets", "repo")'),
    },
  },
  async ({ q }) => text(cmdSearch(q))
);

// ── Tool: fr2052a_show ────────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_show',
  {
    description:
      'Retrieve the full content of a specific FR 2052a section by its section ID. ' +
      'Returns all fields including definition_summary, data_fields, cross_references, ' +
      'reporting_notes, version_history, and the full markdown body.',
    inputSchema: {
      id: z.string().describe('Section ID in dot notation (e.g. "I.A.1", "O.W.3", "S.DC.2")'),
    },
  },
  async ({ id }) => text(cmdShow(id))
);

// ── Tool: fr2052a_map ─────────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_map',
  {
    description:
      'Map a financial product, instrument, or transaction description to the FR 2052a ' +
      'sections where it should be reported. Returns up to 5 candidate sections with ' +
      'confidence percentages. Always verify against the full section instructions.',
    inputSchema: {
      product: z
        .string()
        .describe(
          'Product or instrument to classify (e.g. "overnight repo", "FHLB advance", ' +
            '"operational deposit", "covered bond")'
        ),
    },
  },
  async ({ product }) => text(cmdMap(product))
);

// ── Tool: fr2052a_fields ──────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_fields',
  {
    description:
      'List data fields required for an FR 2052a section or category. ' +
      'Pass a section ID (e.g. "I.A.1") to get fields for that section. ' +
      'Pass a category ID (e.g. "I.A") to get a consolidated field map across all sections in the category.',
    inputSchema: {
      id: z
        .string()
        .describe(
          'Section ID (e.g. "I.A.1") or category ID (e.g. "I.A", "O.W", "S.DC")'
        ),
    },
  },
  async ({ id }) => text(cmdFields(id))
);

// ── Tool: fr2052a_enums ───────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_enums',
  {
    description:
      'Get all enumerated values for a specific data field across all FR 2052a sections. ' +
      'Returns unique values sorted alphabetically, section count, and a per-section breakdown.',
    inputSchema: {
      field: z
        .string()
        .describe(
          'Field name (e.g. "currency", "collateral_type", "counterparty_type", "maturity_bucket")'
        ),
    },
  },
  async ({ field }) => text(cmdEnums(field))
);

// ── Tool: fr2052a_xref ────────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_xref',
  {
    description:
      'Resolve cross-references for a section ID or search for sections that reference ' +
      'a regulation, concept, or rule. When given a section ID, returns both outbound ' +
      'references (what it references) and inbound references (what references it). ' +
      'When given a regulation name (e.g. "LCR", "Reg D"), returns sections that cite it.',
    inputSchema: {
      id: z
        .string()
        .describe(
          'Section ID (e.g. "I.A.1") or regulation/concept name (e.g. "LCR", "Basel III", "Reg D")'
        ),
    },
  },
  async ({ id }) => text(cmdXref(id))
);

// ── Tool: fr2052a_diff ────────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_diff',
  {
    description:
      'Compare two versions of an FR 2052a section to see what changed. ' +
      'Currently only the 2025-02-26 version is available; historical version comparison ' +
      'is planned for a future update.',
    inputSchema: {
      id: z.string().describe('Section ID (e.g. "I.A.1")'),
      from: z.string().optional().describe('Earlier version date (e.g. "2023-03-01")'),
      to: z.string().optional().describe('Later version date (default: "current")'),
    },
  },
  async ({ id, from, to }) => text(cmdDiff(id, from, to))
);

// ── Tool: fr2052a_schema ──────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_schema',
  {
    description:
      'Return the structured frontmatter schema for a section — all YAML fields except ' +
      'the markdown body. Useful for understanding the data structure without the prose.',
    inputSchema: {
      id: z.string().describe('Section ID (e.g. "I.A.1")'),
    },
  },
  async ({ id }) => text(cmdSchema(id))
);

// ── Tool: fr2052a_filter ──────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_filter',
  {
    description:
      'Filter FR 2052a sections by pillar, category, or field characteristics. ' +
      'All parameters are optional and combinable.',
    inputSchema: {
      pillar: z
        .string()
        .optional()
        .describe('Pillar filter: "inflows", "outflows", or "supplemental"'),
      category: z
        .string()
        .optional()
        .describe('Category ID filter (e.g. "I.A", "O.W", "S.DC")'),
      has_field: z.string().optional().describe('Only include sections that have this field name'),
      field_value: z
        .string()
        .optional()
        .describe('Filter by field value in format "fieldname=value" (e.g. "currency=USD")'),
    },
  },
  async ({ pillar, category, has_field, field_value }) =>
    text(cmdFilter({ pillar, category, has_field, field_value }))
);

// ── Tool: fr2052a_export ──────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_export',
  {
    description:
      'Export FR 2052a content in bulk as JSON, YAML, or Markdown. ' +
      'Scope can be a pillar name, a category ID, a section ID, or "all".',
    inputSchema: {
      scope: z
        .string()
        .describe(
          'What to export: "all", pillar name ("inflows"), category ID ("I.A"), ' +
            'or section ID ("I.A.1")'
        ),
      format: z
        .enum(['json', 'yaml', 'md'])
        .optional()
        .describe('Output format: "json" (default), "yaml", or "md"'),
    },
  },
  async ({ scope, format }) => {
    const result = cmdExport(scope, format ?? 'json');
    if (result.type === 'json') return text(result.data);
    return { content: [{ type: 'text' as const, text: result.text ?? '' }] };
  }
);

// ── Tool: fr2052a_glossary ────────────────────────────────────────────────────

server.registerTool(
  'fr2052a_glossary',
  {
    description:
      'Look up FR 2052a terminology. Without a term, returns the full glossary. ' +
      'With a term, performs fuzzy search across term abbreviations, full names, and definitions.',
    inputSchema: {
      term: z
        .string()
        .optional()
        .describe('Term to look up (e.g. "HQLA", "LCR", "repo"). Omit to list all terms.'),
    },
  },
  async ({ term }) => text(cmdGlossary(term))
);

// ── Start ─────────────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('FR 2052a MCP server running (stdio)');
}

main().catch(console.error);
