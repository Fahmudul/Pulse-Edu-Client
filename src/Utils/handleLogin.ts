const handleLogin = async (
  data: Record<"email" | "password", string> | undefined
) => {
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
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to login", error);
    }
    console.log(error);
  }
};
export default handleLogin;
