import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/prisma/generated/prisma/client"; // Import Prisma namespace for types
import { prisma } from "@/libs/prisma";

export const runtime = "nodejs";
// 1. Define an interface for your expected SQL result
interface DbResult {
  time: Date;
  version: string;
}

export async function GET(req: NextRequest) {
  try {
    const dbUrl = process.env.DATABASE_URL ?? "";

    const diagnostics = {
      envLoaded: dbUrl.length > 0,
      isPooler: dbUrl.includes("-pooler"),
    };

    // 2. Type the queryRaw call using the interface
    // result will now be typed as DbResult[] instead of unknown or any
    const result = await prisma.$queryRaw<
      DbResult[]
    >`SELECT NOW() as time, version() as version`;

    return NextResponse.json({
      status: "Connected Successfully",
      diagnostics,
      database: result[0], // Accessing first row with type safety
    });
  } catch (error: unknown) {
    // 3. Solve 'any' in catch block by narrowing the type
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // 'error' is now strictly typed to Prisma's known request errors
      console.error("Prisma Error Code:", error.code);
      return NextResponse.json(
        {
          status: "Database Error",
          code: error.code,
          message: error.message,
        },
        { status: 400 },
      );
    }

    if (error instanceof Error) {
      // Standard JS error handling
      console.error("Generic Error:", error.message);
      return NextResponse.json(
        {
          status: "Server Error",
          message: error.message,
        },
        { status: 500 },
      );
    }

    // Fallback for unknown error types
    return NextResponse.json({ status: "Unknown Error" }, { status: 500 });
  }
}
