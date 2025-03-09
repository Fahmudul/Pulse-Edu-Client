"use server";
export const getNews = async (
  pagesize = 10,
  sortBy = "popularity",
  content = "apple"
) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${content}&from=2025-03-08&to=2025-03-08&sortBy=${sortBy}&pageSize=${pagesize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error("Failed to get news");
  }
};
