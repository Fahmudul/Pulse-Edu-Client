"use client";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useAppDispatch } from "@/Redux/hooks";
import { removeNews, setNews } from "@/Redux/Features/News/News.slice";
import { useRouter } from "next/navigation";

const NewsCard = ({ article, onClick }: { article: any; onClick?: any }) => {
  const router = useRouter();
  // Format the date nicely
  const dispatch = useAppDispatch();
  const formattedDate = article.publishedAt
    ? formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })
    : "Recently";
  const setNewsData = (article: any) => {
    dispatch(removeNews());
    console.log("hitting", article);
    dispatch(setNews(article));
    router.push(`news/${article.title}`);
  };
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => setNewsData(article)}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title || "News image"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">
              No image available
            </span>
          </div>
        )}
        {/* Source Tag */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {article.source?.name || "News"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">
          {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </span>
          <span className="text-xs text-blue-600 font-medium">
            By {article.author?.split("@")[0] || "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
