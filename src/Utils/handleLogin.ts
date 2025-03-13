"use server";
import { jwtDecode } from "jwt-decode";
import { signIn } from "next-auth/react";
import { cookies } from "next/headers";
const handleLogin = async (data: {
  email: string;
  password: string;
}): Promise<{ result: any; decodedData?: any } | undefined> => {
  console.log("from handle login", data);
  const backendUrl = process.env.BACKEND_URL as string;
  try {
    const res = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    const cookieStore = await cookies();
    if (result?.success) {
      cookieStore.set("accessToken", result?.data?.accessToken);
      cookieStore.set("refreshToken", result?.data?.refreshToken);
      const accessToken = cookieStore.get("accessToken")?.value;
      let decodedData = jwtDecode(accessToken as string);
      return { result, decodedData };
    } else {
      return { result };
    }

    // console.log("from line 29", result);
    // if (!decodedData) return { result, decodedData: null };
    // return { result, decodedData };
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error("Failed to login", error);
    }
  }
};
export default handleLogin;
export const googleLogin = async () => {
  signIn("google");
};
