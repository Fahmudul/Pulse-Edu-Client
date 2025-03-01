"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogForm from "@/components/AddForm/BlogForm";
import BlogTable from "@/components/table";
import { useSession } from "next-auth/react";

const AddBlog = () => {
  const [fetchTrue, setFetchTrue] = useState(false);
  // const { data: session } = useSession();
  // console.log("from session 1", session);
  return <></>;
};

export default AddBlog;
