import prisma from "@/libs/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (
      body.fullname &&
      body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      body.amount > 0 &&
      body.price >= 0
    ) {
      await prisma.order.create({
        data: {
          name: body.fullname,
          status: "pending",
          email: body.email,
          amount: body.amount,
          price: body.price,
          message: body.message || "",
        },
      });
      return new Response(
        JSON.stringify({ message: "Order created successfully" }),
        { status: 201 }
      );
    } else {
      return new Response(JSON.stringify({ message: "Invalid input data" }), {
        status: 400,
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error || "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const orders = await prisma.order.findMany();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
