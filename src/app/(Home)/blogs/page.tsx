"use client";
import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  ChevronRight,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogDataType } from "@/types/global";
import moment from "moment";
import { useGetAllBlogsQuery } from "@/Redux/Features/BlogApi/Blog.api";

const BlogListingPage = () => {
  const { data: blogs } = useGetAllBlogsQuery(undefined);
  // console.log(blogs);
  return (
    <div
      style={{ backgroundColor: "#131f22" }}
      className="min-h-screen p-4 md:p-6"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1
          style={{ color: "#fee5b5" }}
          className="text-3xl xl:text-5xl font-bold mt-6 mb-12"
        >
          Latest Blog Posts
        </h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div
              style={{ backgroundColor: "#1a292c" }}
              className="flex items-center rounded-lg  p-4"
            >
              <Search style={{ color: "#fee5b5" }} className="w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search blogs..."
                style={{
                  backgroundColor: "#1a292c",
                  color: "#fee5b5",
                }}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <select
            style={{
              backgroundColor: "#1a292c",
              color: "#fee5b5",
              borderColor: "#fee5b5",
            }}
            className="px-4 rounded-lg border focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="react">React</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="git">Git</option>
          </select>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.data?.map((blog: BlogDataType, idx: number) => (
            <div
              key={idx}
              style={{ backgroundColor: "#1a292c" }}
              className="rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-[1.02] transition-transform duration-200"
            >
              <Image
                src={blog.image as string}
                alt={blog.title}
                className="w-full h-48 object-cover"
                height={250}
                width={250}
              />
              <div className="p-6">
                <div
                  style={{ color: "#fee5b5" }}
                  className="text-sm font-medium mb-2 flex items-center"
                >
                  <span className="mr-2">{blog.category}</span>
                  <span className="opacity-60">•</span>
                  <span className="ml-2 opacity-60">5 min read</span>
                </div>
                <h2
                  style={{ color: "#fee5b5" }}
                  className="text-xl font-bold mb-3 hover:opacity-80 cursor-pointer"
                >
                  {blog.title}
                </h2>

                {/* Author and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    style={{ color: "#fee5b5" }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Joen Doe</p>
                      <p className="text-xs opacity-60">
                        {moment(blog.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interaction Buttons */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "#131f22" }}
                >
                  <div className="flex items-center space-x-4">
                    <button
                      style={{ color: "#fee5b5" }}
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <Heart className="w-5 h-5 mr-1" />
                      <span className="text-sm">123</span>
                    </button>
                    <button
                      style={{ color: "#fee5b5" }}
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span className="text-sm">5</span>
                    </button>
                    <button
                      style={{ color: "#fee5b5" }}
                      className="opacity-75 hover:opacity-100"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    style={{ color: "#fee5b5" }}
                    className="flex items-center text-sm hover:opacity-75"
                  >
                    <Link href={`/blogs/${blog._id}`}>Read More</Link>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button
            style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
            className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogListingPage;
