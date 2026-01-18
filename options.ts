import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./app/api/auth/signIn/page";
import { verifyPassword } from "./utils/dummy/bcrypt";
import prisma from "@/libs/prisma";

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
        const cred = credentials as User | undefined;
        try {
          console.log(cred)
          if (cred) {
            if (
              cred.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
              cred.password.length >= 6
            ) {
              const users = await prisma.user.findFirst({
                where: {
                  email: cred.email,
                },
              });
                console.log(users)
              if (
                users &&
                (await verifyPassword(cred.password, users.password))
              ) {
                return users as CustomUser;
              }
            }
          }
        } catch (error) {
          console.error("Error authorizing user", error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
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
    signIn: "/api/auth/signIn",
  },
};

export default authOptions;
