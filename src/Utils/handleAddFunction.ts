import { BlogDataType, FormDataType } from "@/types/global";

export const handleAddProject = async (data: FormDataType) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
    const res = await fetch(`${backendUrl}/project/create-project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("fom handle add project", result);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to add project");
    }
  }
};

export const handleAddBlog = async (data: BlogDataType) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
    const res = await fetch(`${backendUrl}/blog/create-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("fom handle add blog", result);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to create blog");
    }
  }
};
