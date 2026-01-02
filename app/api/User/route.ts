import prisma from "@/libs/prisma";
import { Prisma } from "@/prisma/generated/prisma/client";
import { hashPassword } from "@/utils/dummy/bcrypt";

export async function POST(req: Request) {
  const data = await req.json();
  if (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    data.password.length >= 6 &&
    data.username.trim().length > 0 &&
    /^\+?[1-9]\d{1,14}$/.test(data.phone) &&
    ["admin", "user", "superAdmin"].includes(data.role)
  ) {
    try {
      const hashedPassword = await hashPassword(data.password);
      await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          phone: data.phone,
          password: hashedPassword,
          role: data.role,
        },
      });
      return new Response(JSON.stringify({ message: "User created" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return new Response(
            JSON.stringify({ error: "Username or Email already exists" }),
            { status: 400 }
          );
        }
        console.error("Error creating user:", error);
      }
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Invalid input data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
