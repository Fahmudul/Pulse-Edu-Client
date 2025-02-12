import { TInputFields } from "@/app/login/page";

export const handleRegister = async (data: TInputFields & { name: string }) => {
  console.log("hitting 2", data);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
  try {
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
