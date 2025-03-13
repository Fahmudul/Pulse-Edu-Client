import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      profile(profile) {
        return { ...profile, id: profile.sub, role: "teacher" };
      },
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly openid email profile",
            // "openid email profile",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        // console.log("account details", account);
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
        // console.log(
        //   "Auth Fetching:",
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/find-user`
        // );
        if (!res.ok) {
          console.error("Backend response error:", await res.text());
          // Still return true to allow sign-in even if the backend call fails
          return true;
        }

        const response = await res.json();
        // console.log("response from 54", response);
        if (res.ok && account?.provider === "google") {
          user.id = response?.data?._id;
          user.image = response?.data?.image;
          return true;
        }
        return true;
      } catch (error) {
        // console.error("Sign-in callback error:", error);
        return true;
      }
    },
    async jwt({ user, token, account }) {
      if (user) {
        // console.log("google user 61", user);
        token.name = user.name;
        token.id = user.id!;
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
        session.user.email = token.email!;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET as string,
});
// console.log("Auth ENV:", {
//   GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
//   GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
//   BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
//   BACKEND_URL_Server: process.env.BACKEND_URL,
//   AUTH_SECRET: process.env.AUTH_SECRET,
// });
// export default authOptions;
