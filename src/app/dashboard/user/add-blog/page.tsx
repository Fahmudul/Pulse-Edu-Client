"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogForm from "@/components/AddForm/BlogForm";
import BlogTable from "@/components/table";
import { useSession } from "next-auth/react";

const AddBlog = () => {
  const [fetchTrue, setFetchTrue] = useState(false);
  const { data: session } = useSession();
  console.log("from session 1", session);
  return (
    <div style={{ backgroundColor: "#131f22" }} className="min-h-screen p-6">
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="max-w-6xl mx-auto rounded-lg p-6 min-h-[calc(100vh-100px)] "
      >
        <Tabs defaultValue="create-blog" className="w-full h-full">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger
              onClick={() => {
                setFetchTrue(!fetchTrue);
              }}
              value="create-blog"
            >
              Create Blog
            </TabsTrigger>
            <TabsTrigger onClick={() => setFetchTrue(true)} value="blogs">
              Blogs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="create-blog" className="h-full ">
            <h2
              style={{ color: "#fee5b5" }}
              className="text-2xl font-bold mb-6 text-center"
            >
              Create New Blog Post
            </h2>
            <BlogForm />
          </TabsContent>
          <TabsContent value="blogs" className="h-full">
            <BlogTable fetchTrue={fetchTrue} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AddBlog;
