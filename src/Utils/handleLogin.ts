"use server";
import { cookies } from "next/headers";
const handleLogin = async (data: { email: string; password: string }) => {
  console.log("from handle login", data);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
  try {
    const res = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    // console.log(result);
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result?.data?.accessToken);
    cookieStore.set("refreshToken", result?.data?.refreshToken);
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to login", error);
    }
    console.log(error);
  }
};
export default handleLogin;
