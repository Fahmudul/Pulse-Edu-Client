import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronLeft,
  User,
} from "lucide-react";
import Image from "next/image";
import { getSingleBlog } from "@/Utils/getAllData";
import { tags } from "@/Constants/SelectItems";
import Link from "next/link";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: blogPost } = await getSingleBlog(id);

  const relatedPosts = [
    {
      id: 1,
      title: "Advanced TypeScript Patterns in React",
      image: "/api/placeholder/400/200",
      date: "Feb 8, 2024",
    },
    {
      id: 2,
      title: "React Performance Optimization Tips",
      image: "/api/placeholder/400/200",
      date: "Feb 5, 2024",
    },
  ];

  return (
    <div style={{ backgroundColor: "#131f22" }} className="min-h-screen pb-12">
      {/* Featured Image */}
      <div className="w-full h-[400px] relative">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
          height={250}
          width={250}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative">
        {/* Back Button */}
        <Link
          href={"/blogs"}
          style={{ backgroundColor: "#1a292c", color: "#fee5b5" }}
          className="mb-6 px-4 py-2 rounded-lg flex items-center hover:opacity-90 transition-opacity w-fit"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Blogs
        </Link>

        {/* Main Content */}
        <div
          style={{ backgroundColor: "#1a292c" }}
          className="rounded-lg shadow-xl p-6 md:p-10"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{ color: "#fee5b5" }}
                className="text-sm font-medium"
              >
                {blogPost.category}
              </span>
              <span style={{ color: "#fee5b5" }} className="opacity-60">
                •
              </span>
              <span style={{ color: "#fee5b5" }} className="text-sm opacity-60">
                {/* {blogPost.readTime} */}5 min read
              </span>
            </div>

            <h1
              style={{ color: "#fee5b5" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {blogPost.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-10 h-10 rounded-full mr-4 border p-1" />
                <div>
                  <p style={{ color: "#fee5b5" }} className="font-medium">
                    {""}
                  </p>
                  <p
                    style={{ color: "#fee5b5" }}
                    className="text-sm opacity-60"
                  >
                    {/* {blogPost.publishDate} */}
                    Feb 10, 2024
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div
            style={{ color: "#fee5b5" }}
            className="prose prose-lg max-w-none opacity-90 mb-8"
          >
            <p className="text-lg text-[#fee5b5] mt-4">
              {blogPost.description}
            </p>

            <p className="mt-6 text-[#fee5b5] leading-relaxed">
              {blogPost?.content}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{ backgroundColor: "#131f22", color: "#fee5b5" }}
                className="px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Engagement Section */}
          <div
            className="border-t border-b py-6 mb-8"
            style={{ borderColor: "#131f22" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  style={{ color: "#fee5b5" }}
                  className="flex items-center opacity-75 hover:opacity-100"
                >
                  <Heart className="w-6 h-6 mr-2" />
                  <span>{124}</span>
                </button>
                <button
                  style={{ color: "#fee5b5" }}
                  className="flex items-center opacity-75 hover:opacity-100"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  <span>{15}</span>
                </button>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  style={{ color: "#fee5b5" }}
                  className="opacity-75 hover:opacity-100"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div
            style={{ backgroundColor: "#131f22" }}
            className="rounded-lg p-6 mb-8"
          >
            <h3 style={{ color: "#fee5b5" }} className="text-lg font-bold mb-4">
              About the Author
            </h3>
            <p style={{ color: "#fee5b5" }} className="opacity-80">
              {/* {blogPost.author.bio} */}
              Frontend developer with 5+ years of experience. Passionate about
              React, TypeScript, and web performance.
            </p>
          </div>

          {/* Related Posts */}
          <div>
            <h3 style={{ color: "#fee5b5" }} className="text-xl font-bold mb-6">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  style={{ backgroundColor: "#131f22" }}
                  className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                    height={250}
                    width={250}
                  />
                  <div className="p-4">
                    <h4
                      style={{ color: "#fee5b5" }}
                      className="font-medium mb-2"
                    >
                      {post.title}
                    </h4>
                    <p
                      style={{ color: "#fee5b5" }}
                      className="text-sm opacity-60"
                    >
                      {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
