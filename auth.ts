import authOptions from "./options";
import nextAuth from "next-auth";

export const { handler, signIn } = nextAuth(authOptions);