# FR 2052a Reference — Policy-as-Code

Dual-mode regulatory reference site for the Federal Reserve's FR 2052a Complex Institution Liquidity Monitoring Report. Serves both human practitioners and AI agents from a single content source.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The reference content (all sections, search, API, Machine mode) works without a database. The annotation system requires database setup (see below).

## Database Setup (for Annotations)

The Tier 1 private annotation system requires a PostgreSQL database. Two options:

### Option A: Local PostgreSQL

```bash
# Create the database
createdb fr2052a

# Copy and edit the env file
cp .env.local .env.local.backup
# Edit DATABASE_URL in .env.local to point to your local instance:
# DATABASE_URL="postgresql://postgres:password@localhost:5432/fr2052a"

# Push schema to database
npx prisma db push

# Start the server
npm run dev
```

### Option B: Neon (free tier, no local install)

1. Create a free project at [neon.tech](https://neon.tech)
2. Copy the connection string from the Neon dashboard
3. Set `DATABASE_URL` in `.env.local` to the Neon connection string
4. Run `npx prisma db push`

### Option C: Supabase (free tier)

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to Project Settings → Database → Connection string (URI mode)
3. Set `DATABASE_URL` in `.env.local`
4. Run `npx prisma db push`

### After database setup

```bash
# Create tables
npx prisma db push

# (Optional) Open Prisma Studio to inspect data
npx prisma studio
```

## Environment Variables

Copy `.env.local` and fill in real values:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Random secret for JWT signing — generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Site URL (e.g., `http://localhost:3000` for dev) |

## MCP Server (Claude Desktop integration)

```bash
# Start the MCP server
npm run mcp
# or
npx tsx mcp/server.ts
```

See `mcp/README.md` for Claude Desktop connection instructions.

## Architecture

- **Next.js 16 App Router** — server + client components
- **Content**: 147 markdown files in `/content` with YAML frontmatter (no database needed)
- **Search**: Fuse.js fuzzy search over all sections
- **Auth**: NextAuth.js with credentials provider (email/password), JWT session strategy
- **Database**: PostgreSQL via Prisma (annotations only)
- **Annotations**: Private per-organization notes, scoped to `org_id`
- **MCP**: 11 tools via `@modelcontextprotocol/sdk`, stdio transport

## API

All content endpoints are public and CORS-enabled. See `/llms.txt` for the full API reference.

```
GET /api/search?q=HQLA
GET /api/section/I.A.1
GET /api/map?product=overnight+repo
GET /api/export?scope=inflows&format=json
```

Annotation endpoints require authentication:

```
GET  /api/annotations?section_id=I.A.1
POST /api/annotations
PUT  /api/annotations/:id
DELETE /api/annotations/:id
```

## Content

Extracted from the FR 2052a form (version 2025-02-26). Source: Federal Reserve Board. U.S. government works are not subject to copyright.

## Roadmap

- **Tier 1** (current): Private per-organization annotations
- **Tier 2** (planned): Anonymous community Q&A with moderation
- **Tier 3** (future): Fed-acknowledged interpretations and FAQ updates
