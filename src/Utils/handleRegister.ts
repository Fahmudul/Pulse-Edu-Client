"use server"
import { TInputFields } from "@/app/login/page";

const backendUrl = process.env.BACKEND_URL as string;

export const handleRegister = async (data: TInputFields & { name: string }) => {
  console.log("hitting 2", data);
  try {
    console.log("sending data", `${backendUrl}/auth/register`);
    const res = await fetch(`${backendUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("from hitting 2", result);
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to register", error);
    }
    console.log(error);
  }
};
