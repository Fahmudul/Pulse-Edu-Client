"use client";
import React from "react";
import { Table } from "antd";
import { columns } from "@/Constants/TableProps";
import { BlogDataType, DataType } from "@/types/global";
import { useGetAllBlogsQuery } from "@/Redux/Features/BlogApi/Blog.api";
import moment from "moment";
const BlogTable = ({ fetchTrue }: { fetchTrue: boolean }) => {
  const {
    data: newData,
    isFetching,
    isLoading,
  } = useGetAllBlogsQuery("", {
    skip: !fetchTrue,
  });
  console.log(newData);
  const blogData: DataType[] = newData?.data?.map((blog:BlogDataType) => ({
    key: blog._id,
    title: blog.title,
    category: blog.category,
    email: blog.email,
    postedOn: moment(blog.createdAt).format("LT") || "",
  }));
  return (
    <div
      className="p-6 min-h-[calc(100vh-25vh)]"
      style={{ backgroundColor: "#131f22" }}
    >
      <Table
        columns={columns}
        dataSource={blogData}
        style={{
          backgroundColor: "#1a292c",
          borderRadius: "8px",
          overflow: "hidden",
          height: "100%",
        }}
        className="custom-table"
        loading={isFetching || isLoading}
      />
    </div>
  );
};

export default BlogTable;
