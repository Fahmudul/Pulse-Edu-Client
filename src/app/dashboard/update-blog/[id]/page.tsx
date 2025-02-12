"use client";
import { categories } from "@/Constants/SelectItems";
import { useUpdateBlogMutation } from "@/Redux/Features/BlogApi/Blog.api";
import { GetImageURL } from "@/Utils/getImageUrl";
import { BlogDataType } from "@/types/global";
import { Upload } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const UpdateBlogForm = () => {
  const params = useParams();
  const { id } = params;
  const [formData, setFormData] = useState<BlogDataType>({
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
  });

  const [updateBlog] = useUpdateBlogMutation(undefined);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Uploading Blog...");
    if (formData.image instanceof File) {
      const imageUrl = await GetImageURL(formData.image as File);
      formData.image = imageUrl;
    } else {
      formData.image = "";
    }
    const { data: result } = await updateBlog({ id: id, formData });
    console.log(result);
    if (result?.success) {
      toast.success("Blog updpated Successfully", { id: toastId });
    } else {
      const message = result?.message || "Failed to upload blog";
      toast.error(message, { id: toastId });
    }
    setFormData({
      title: "",
      description: "",
      content: "",
      category: "",
      image: new File([""], ""),
    });
  };

  return (
    <div style={{ backgroundColor: "#131f22" }} className="min-h-screen p-6">
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="max-w-7xl mx-auto rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold text-[#fee5b5] mb-6">Update Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label
                  style={{ color: "#fee5b5" }}
                  className="block text-sm font-medium"
                >
                  Blog Title
                </label>
                <input
                  type="text"
                  style={{
                    backgroundColor: "#131f22",
                    color: "#fee5b5",
                    borderColor: "#fee5b5",
                  }}
                  className="w-full p-3 rounded border focus:outline-none"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Enter blog title"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  style={{ color: "#fee5b5" }}
                  className="block text-sm font-medium"
                >
                  Category
                </label>
                <select
                  style={{
                    backgroundColor: "#131f22",
                    color: "#fee5b5",
                    borderColor: "#fee5b5",
                  }}
                  className="w-full p-3 rounded border focus:outline-none"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  style={{ color: "#fee5b5" }}
                  className="block text-sm font-medium"
                >
                  Short Description
                </label>
                <textarea
                  rows={4}
                  style={{
                    backgroundColor: "#131f22",
                    color: "#fee5b5",
                    borderColor: "#fee5b5",
                  }}
                  className="w-full p-3 rounded border focus:outline-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter a brief description of your blog post"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label
                  style={{ color: "#fee5b5" }}
                  className="block text-sm font-medium cursor-pointer"
                  htmlFor="picture"
                >
                  Featured Image
                  <div
                    style={{ borderColor: "#fee5b5" }}
                    className="border-2 border-dashed rounded-lg p-8 text-center hover:opacity-80 transition-opacity"
                  >
                    <Upload
                      style={{ color: "#fee5b5" }}
                      className="mx-auto w-12 h-12 mb-4"
                    />
                    <p style={{ color: "#fee5b5" }} className="text-sm">
                      Drag and drop your image here, or click to select
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      id="picture"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setFormData({
                            ...formData,
                            image: e?.target?.files[0],
                          });
                        }
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Content */}
              <div className="space-y-2">
                <label
                  style={{ color: "#fee5b5" }}
                  className="block text-sm font-medium"
                >
                  Blog Content
                </label>
                <textarea
                  rows={24}
                  style={{
                    backgroundColor: "#131f22",
                    color: "#fee5b5",
                    borderColor: "#fee5b5",
                  }}
                  className="w-full p-3 rounded border focus:outline-none"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Write your blog content here..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
            className="w-full p-3 rounded font-bold hover:opacity-90 transition-opacity mt-6"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogForm;
