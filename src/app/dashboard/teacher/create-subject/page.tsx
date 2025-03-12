"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CreateSubject } from "@/Services/Teacher";
import Image from "next/image";
import { GetImageURL } from "@/Utils/getImageUrl";
import { useSession } from "next-auth/react";
import { ISubject } from "@/types/global";
import { toast } from "sonner";

// Define form schema
const formSchema = z.object({
  name: z
    .string()
    .max(80, { message: "Title must be less than 80 characters" }),
  description: z
    .string()
    .max(120, { message: "Subtitle must be less than 120 characters" }),
  category: z.string({ message: "Category is required" }),
  image: z.custom<File>((file) => file instanceof File, {
    message: "Image is required",
  }),
});

const subjectForm = () => {
  const session = useSession();
  const [userImage, setUserImage] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      // image: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    console.log(payload);
    const image = await GetImageURL(payload.image as File);
    const modifiedPayload = {
      ...payload,
      image,
      tutor: session.data?.user?.id,
    } as ISubject;
    delete modifiedPayload.title;
    const toastId = toast.loading("Creating subject...");
    const res = await CreateSubject(modifiedPayload);
    if (res?.success) {
      toast.success("Subject created successfully", { id: toastId });
    } else {
      toast.error(res?.message, { id: toastId });
    }
    form.reset();
    setUserImage("");
    // console.log(res);
    // Handle form submission
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setUserImage(imageUrl);
      form.setValue("image", file);
      form.trigger("image");
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#f5f7fa] my-10 shadow-lg shadow-cyan-500/40 ">
      <h1 className="text-3xl mb-5 font-bold text-primary">
        Subject Information
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <div className="relative border-2 border-dashed border-gray-300 rounded-md">
            {userImage ? (
              <Image
                src={userImage}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-md"
              />
            ) : (
              <div className="h-[150px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                No Image
              </div>
            )}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <Label
                    htmlFor="picture"
                    className="text-center cursor-pointer absolute bottom-0 p-3 bg-black opacity-40 text-white w-full text-lg font-semibold"
                  >
                    Upload Photo
                  </Label>
                  <FormControl>
                    <Input
                      id="picture"
                      className="hidden"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Title Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="name" className="text-lg font-medium">
                  Title
                </Label>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Your subject name"
                      {...field}
                      value={field.value}
                      className="w-full"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">
                      {field.value.length}/80
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subtitle Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="description" className="text-lg font-medium">
                  Description
                </Label>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="description"
                      placeholder="Your subject subtitle"
                      {...field}
                      value={field.value}
                      className="w-full"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">
                      {field?.value.length}/120
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category and Sub-Category */}

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="category" className="text-lg font-medium">
                  Category
                </Label>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="category"
                      placeholder="Your subject title"
                      {...field}
                      value={field.value}
                      className="w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Languages and Level */}

          {/* Action Buttons */}
          <div className="flex justify-end pt-4">
            <div className="space-x-2">
              <Button variant="default" type="submit" className="">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default subjectForm;
