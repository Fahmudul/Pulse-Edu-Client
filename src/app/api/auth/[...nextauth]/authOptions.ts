import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        return { ...profile, id: profile.sub, role: "teacher" };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly openid email profile",
        },
      },
    }),
    GithubProvider({
      profile(profile) {
        return { ...profile, id: profile.id, role: "teacher" };
      },
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("account details", account);
      const OuthData = {
        email: user?.email,
        name: user?.name,
        provider: account?.provider,
        googleAccessToken: account?.access_token,
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
      const response = await res.json();
      console.log("from google login", response);
      if (res.ok && account?.provider === "google") {
        user.id = response?.data?._id;
        return true;
      }
      return true;
    },
    async jwt({ user, token, account }) {
      if (user) {
        console.log("google user 61", user);
        token.name = user.name;
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = account?.access_token;
        token.refreshToken = account?.refresh_token;
      }

      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.name = token.name;
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.accessToken = token.accessToken;
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
