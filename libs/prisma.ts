import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/prisma/generated/prisma/client";
import ws from "ws";

if (typeof window === "undefined") {
  neonConfig.webSocketConstructor = ws;
}

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaNeon({ connectionString });

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
