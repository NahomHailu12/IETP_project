import prisma from "@/libs/prisma";
import { verifyPassword } from "@/utils/dummy/bcrypt";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      if (data) {
        if (
          data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
          data.password.length >= 6
        ) {
          const users = await prisma.user.findFirst({
            where: {
              email: data.email,
            },
          });

          if (users && (await verifyPassword(data.password, users.password))) {
            return Response.json(
              { message: "Authorization data received" },
              {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }
            );
          }
        }

        return Response.json(
          { error: "Invalid Crendential" },
          {
            status: 403,
          }
        );
      }
    } catch (error) {
      console.error("Error parsing authorization data:", error);
    }
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
