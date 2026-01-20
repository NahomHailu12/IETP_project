import NextAuth from "next-auth";
import authOptions from "@/options"; // Adjust this path to where your authOptions is

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
