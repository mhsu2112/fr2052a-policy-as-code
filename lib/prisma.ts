import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

/**
 * Lazy Prisma singleton.
 * Returns null if DATABASE_URL is a placeholder or missing,
 * so the app works without a database (annotations disabled).
 */
function createPrismaClient(): PrismaClient | null {
  const url = process.env.DATABASE_URL ?? '';
  if (!url || url.includes('placeholder')) return null;

  try {
    return new PrismaClient();
  } catch {
    console.warn('[prisma] Could not initialise PrismaClient — annotations disabled.');
    return null;
  }
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ?? createPrismaClient();

if (prisma && process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
