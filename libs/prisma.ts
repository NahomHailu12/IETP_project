import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/prisma/generated/prisma/client";
import ws from "ws";

if (typeof window === "undefined") {
  neonConfig.webSocketConstructor = ws;
}

// which allows us to catch it before Prisma crashes with the 'localhost' error.
const connectionString = `${process.env.DATABASE_URL}`;

if (!connectionString || connectionString === "undefined" || connectionString === "") {
  throw new Error("Vercel Runtime Error: DATABASE_URL is not reaching the server.");
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// We pass the string directly to PrismaNeon as per Prisma 7 standards
const adapter = new PrismaNeon({ connectionString });

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;