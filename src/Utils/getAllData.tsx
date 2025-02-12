const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${backendUrl}/project/get-all-projects`, {
      cache: "force-cache",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to get all projects");
    }
  }
};
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${backendUrl}/blog/get-all-blogs`, {
      cache: "force-cache",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to get all projects");
    }
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const res = await fetch(`${backendUrl}/blog/get-single-blog/${id}`, {
      cache: "force-cache",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to get single blog");
    }
  }
};
export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(`${backendUrl}/project/get-single-project/${id}`);
    const { data } = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to get single project");
    }
  }
};
