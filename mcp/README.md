# FR 2052a MCP Server

Connect AI tools and agents to the FR 2052a regulatory reference content via the Model Context Protocol.

## What it does

The MCP server exposes 11 tools that match the site's command palette commands. Any MCP-compatible client (Claude Desktop, Cursor, etc.) can call them to:

- Search and retrieve FR 2052a section definitions
- Map financial products to their reporting sections
- Inspect data fields, enumerated values, and cross-references
- Export content in JSON, YAML, or Markdown

## Connect to Claude Desktop

1. Make sure you have Claude Desktop installed.

2. From the project root, find the full path to the server:

   ```bash
   pwd
   # e.g. /Users/you/fr2052a-site
   ```

3. Open Claude Desktop settings → **Developer** → **Edit Config** and add:

   ```json
   {
     "mcpServers": {
       "fr2052a": {
         "command": "npx",
         "args": ["tsx", "/Users/you/fr2052a-site/mcp/server.ts"],
         "cwd": "/Users/you/fr2052a-site"
       }
     }
   }
   ```

   Replace `/Users/you/fr2052a-site` with the actual project path.

4. Restart Claude Desktop. You should see **fr2052a** listed under Connected Tools.

## Test locally

```bash
# From the project root
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}' | npx tsx mcp/server.ts
```

## Available tools

| Tool | Description |
|------|-------------|
| `fr2052a_search` | Full-text fuzzy search across all sections |
| `fr2052a_show` | Retrieve a full section by ID |
| `fr2052a_map` | Map a financial product to its reporting section(s) |
| `fr2052a_fields` | List data fields for a section or category |
| `fr2052a_enums` | Get enumerated values for a specific field |
| `fr2052a_xref` | Resolve cross-references for a section or regulation |
| `fr2052a_diff` | Compare section versions (single version currently) |
| `fr2052a_schema` | Return structured frontmatter schema for a section |
| `fr2052a_filter` | Filter sections by pillar, category, or field |
| `fr2052a_export` | Bulk-export content as JSON, YAML, or Markdown |
| `fr2052a_glossary` | Look up FR 2052a terminology |

## Example usage in Claude

> "Which section of the FR 2052a covers overnight Treasury repos?"

Claude will call `fr2052a_map` with `product: "overnight Treasury repo"` and return the best-matching sections with confidence scores.

> "Show me all the data fields required for section I.A.1"

Claude will call `fr2052a_fields` with `id: "I.A.1"`.

> "What does HQLA mean in the FR 2052a context?"

Claude will call `fr2052a_glossary` with `term: "HQLA"`.
