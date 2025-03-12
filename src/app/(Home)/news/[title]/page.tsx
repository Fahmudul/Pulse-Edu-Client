"use client";
import React from "react";
import { ArrowLeft, Share, Bookmark, Calendar, User } from "lucide-react";
import { useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NewsDetailsPage = () => {
  const article = useAppSelector((state) => state.news);
  console.log("aritle", article);

  const router = useRouter();
  const fullDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Recently published";

  // Clean up author name to remove email portion if present
  const authorName = article.author
    ? article.author.includes("@")
      ? article.author.split("@")[0]
      : article.author
    : "Unknown author";

  // Format content or use description if content isn't available
  const displayContent =
    article.content && article.content.includes("[+")
      ? article.content.split("[+")[0] + "..."
      : article.content || article.description || "No content available";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation Header */}
      <div className="mb-6 flex justify-between items-center">
        <Link
          href="/news"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Back to news</span>
        </Link>

        <div className="flex space-x-3">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Share size={18} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Bookmark size={18} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Source and Title */}
      <div className="mb-4">
        <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md mb-3">
          {article.source?.name || "News Source"}
        </div>
        <h1 className="text-3xl font-bold leading-tight mb-4 dark:text-white">
          {article.title}
        </h1>
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6 space-x-4">
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{fullDate}</span>
        </div>
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>{authorName}</span>
        </div>
      </div>

      {/* Featured Image */}
      {article.urlToImage && (
        <div className="mb-8">
          <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
            <Image
              fill
              src={article.urlToImage}
              alt={article.title as string}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 italic text-center">
            Image credit: {article.source?.name || "News source"}
          </p>
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-lg font-semibold mb-4 dark:text-gray-200">
          {article.description}
        </p>

        <div className="text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>{displayContent}</p>

          {article.url && (
            <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm">
                Read the full article at:{" "}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {article.source?.name || "original source"}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
