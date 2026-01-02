import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomUser extends User {
  id: string;
  email: string;
  role?: string;
  username?: string;
}

declare module "next-auth" {
  interface Session {
    user: CustomUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: CustomUser;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const cred = credentials as Record<"email" | "password", string> | undefined;
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/authorize`, {
            method: "POST",
            body: JSON.stringify({
              email: cred?.email,
              password: cred?.password
            }),
            headers: { "Content-Type": "application/json" }
          });
          
          const data = await res.json();
          if (res.ok && data) {
            return data;
          }
        } catch (error) {
          console.error("Error authorizing user:", error);
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user as CustomUser;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default authOptions;