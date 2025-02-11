import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { TInputFields } from "@/app/login/page";
import handleLogin from "@/Utils/handleLogin";
import { handleRegister } from "@/Utils/handleRegister";
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<any> {
        try {
          const result = await handleLogin(credentials);
          if (result?.success) {
            const user = result?.data;
            console.log("from line 22", user);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Failed to login");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log("from line 46", user);
      // console.log("from line 47", account);
      // console.log("from line 48", profile);
      const email = user?.email as string;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/find-user?email=${email}`
      );
      const isUserExist = await res.json();

      console.log("from line 54", isUserExist);
      if (!isUserExist?.success && user?.email) {
        console.log("hitting");
        const createUserInDB = await handleRegister({
          email: user.email,
          name: user?.name as string,
        });
        if (createUserInDB?.success) {
          return true;
        }
      }
      return true;
    },
    async jwt({ user, token }) {
      console.log("user", user);
      // console.log("token", token);
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      console.log("from line 77", token);
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session:{
    strategy:"jwt"
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

export default authOptions;
