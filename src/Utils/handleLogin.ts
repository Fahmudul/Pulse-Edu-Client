"use server";
import { jwtDecode } from "jwt-decode";
import { signIn } from "next-auth/react";
import { cookies } from "next/headers";
const handleLogin = async (data: {
  email: string;
  password: string;
}): Promise<{ result: any; decodedData: any } | undefined> => {
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
    cookieStore.set("accessToken", result?.data?.accessToken);

    cookieStore.set("refreshToken", result?.data?.refreshToken);
    console.log("from line 29", result);
    const accessToken = cookieStore.get("accessToken")?.value;
    const decodedData = jwtDecode(accessToken as string);
    return { result, decodedData };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to login", error);
    }
    console.log(error);
  }
};
export default handleLogin;
export const googleLogin = async () => {
  signIn("google");
};
