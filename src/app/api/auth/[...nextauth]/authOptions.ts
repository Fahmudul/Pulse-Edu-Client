import { UserType } from "./../../../../types/global";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import handleLogin from "@/Utils/handleLogin";
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
      ): Promise<UserType | null> {
        try {
          const result = await handleLogin(credentials);
          if (result?.success) {
            const user = result?.data;
            return user;
          } else {
            return null;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
          throw new Error("Failed to login");
        }
      },
    }),
    GoogleProvider({
      profile(profile) {
        return { ...profile, id: profile.sub, role: "user" };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      profile(profile) {
        return { ...profile, id: profile.id, role: "user" };
      },
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      const OuthData = {
        email: user?.email,
        name: user?.name,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/find-user`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(OuthData),
        }
      );
      if (res.ok) {
        return true;
      }
      return true;
    },
    async jwt({ user, token }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }

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
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

export default authOptions;
