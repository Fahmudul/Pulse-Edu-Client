"use client";
import { projectTypeOptions, techStackOptions } from "@/Constants/Routes";
import { GetImageURL } from "@/Utils/getImageUrl";
import { FormDataType } from "@/types/global";
import { Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProjectMutation } from "@/Redux/Features/ProjectApi/Project.api";
import { useParams } from "next/navigation";

const UpdateProjectForm = () => {
  const params = useParams();
    const { id } = params;
  const formRef = useRef<HTMLFormElement>(null);
  const [updateProject] = useUpdateProjectMutation(undefined);
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    liveLink: "",
    githubLink: "",
    description: "",
    image: "",
    techStack: [],
    projectTypes: [],
  });
  const [imageName, setImageName] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, image: e.target.files?.[0] });
      setImagePreview(URL.createObjectURL(e.target.files?.[0]));
      setImageName(e.target.files[0].name);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Uploading Project...");
    if (formData.image instanceof File) {
      const imageUrl = await GetImageURL(formData.image as File);
      formData.image = imageUrl;
    } else {
      formData.image = "";
    }
    const { data: result } = await updateProject({ id, formData });
    if (result?.success) {
      toast.success("Project updated Successfully", { id: toastId });
    } else {
      const message = result?.message || "Failed to upload project";
      toast.error(message, { id: toastId });
    }
    console.log(formData);
    formRef.current?.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-6xl mx-auto my-4 bg-[#1a292c] xl:p-8 rounded-lg"
      ref={formRef}
    >
      <h1 style={{ color: "#fee5b5" }} className="text-3xl font-semibold">
        Update Project
      </h1>
      {/* Image Upload */}
      <div className="space-y-2">
        <Label
          style={{ color: "#fee5b5" }}
          className="block text-sm font-medium cursor-pointer"
          htmlFor="picture"
        >
          Project Image
          <div
            style={{ borderColor: "#fee5b5" }}
            className="border-2 border-dashed rounded-lg p-8 text-center mt-2"
          >
            {imagePreview ? (
              <div className=" w-auto h-auto relative">
                <Image
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="w-32 h-32 mx-auto rounded"
                  width={100}
                  height={100}
                />
                <p className="text-sm mt-2">{imageName}</p>
                <X
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => {
                    setImagePreview("");
                    setImageName("");
                  }}
                />
              </div>
            ) : (
              <>
                <Upload className="mx-auto w-12 h-12 mb-4" />
                <p className="text-sm">
                  Drag and drop your image here, or click to select
                </p>
              </>
            )}
            <Input
              type="file"
              id="picture"
              className="hidden"
              accept="image/*"
              onChange={handleImagePreview}
            />
          </div>
        </Label>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <label
          style={{ color: "#fee5b5" }}
          className="block text-sm font-medium"
        >
          Project Title
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
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            style={{ color: "#fee5b5" }}
            className="block text-sm font-medium"
          >
            Live Demo Link
          </label>
          <input
            type="url"
            style={{
              backgroundColor: "#131f22",
              color: "#fee5b5",
              borderColor: "#fee5b5",
            }}
            className="w-full p-3 rounded border focus:outline-none"
            value={formData.liveLink}
            onChange={(e) =>
              setFormData({ ...formData, liveLink: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <label
            style={{ color: "#fee5b5" }}
            className="block text-sm font-medium"
          >
            GitHub Repository
          </label>
          <input
            type="url"
            style={{
              backgroundColor: "#131f22",
              color: "#fee5b5",
              borderColor: "#fee5b5",
            }}
            className="w-full p-3 rounded border focus:outline-none"
            value={formData.githubLink}
            onChange={(e) =>
              setFormData({ ...formData, githubLink: e.target.value })
            }
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <label
          style={{ color: "#fee5b5" }}
          className="block text-sm font-medium"
        >
          Tech Stack & Tools
        </label>
        <div className="flex flex-wrap gap-2">
          {techStackOptions.map((tech) => (
            <button
              key={tech}
              type="button"
              style={{
                backgroundColor: formData.techStack.includes(tech)
                  ? "#fee5b5"
                  : "#131f22",
                color: formData.techStack.includes(tech)
                  ? "#131f22"
                  : "#fee5b5",
                borderColor: "#fee5b5",
              }}
              className="px-3 py-1 rounded border hover:opacity-80 transition-colors"
              onClick={() => {
                const updated = formData.techStack.includes(tech)
                  ? formData.techStack.filter((t) => t !== tech)
                  : [...formData.techStack, tech];
                setFormData({ ...formData, techStack: updated });
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <label
          style={{ color: "#fee5b5" }}
          className="block text-sm font-medium"
        >
          Project Type
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypeOptions.map((type) => (
            <button
              key={type}
              type="button"
              style={{
                backgroundColor: formData.projectTypes.includes(type)
                  ? "#fee5b5"
                  : "#131f22",
                color: formData.projectTypes.includes(type)
                  ? "#131f22"
                  : "#fee5b5",
                borderColor: "#fee5b5",
              }}
              className="px-3 py-1 rounded border hover:opacity-80 transition-colors"
              onClick={() => {
                const updated = formData.projectTypes.includes(type)
                  ? formData.projectTypes.filter((t) => t !== type)
                  : [...formData.projectTypes, type];
                setFormData({ ...formData, projectTypes: updated });
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label
          style={{ color: "#fee5b5" }}
          className="block text-sm font-medium"
        >
          Project Description
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
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
        className="w-full p-3 rounded font-bold hover:opacity-90 transition-opacity"
      >
        Update Project
      </button>
    </form>
  );
};

export default UpdateProjectForm;
