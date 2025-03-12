"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useState } from "react";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters").optional(),
    email: z.string().email("Invalid email").optional(),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .optional(),

    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters")
      .optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      // Only validate passwords match if new password is provided
      if (data.newPassword) {
        return data.newPassword === data.confirmPassword;
      }
      return true;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  )
  .refine(
    (data) => {
      // Require current password if trying to set a new password
      if (data.newPassword) {
        return !!data.currentPassword;
      }
      return true;
    },
    {
      message: "Current password is required to set a new password",
      path: ["currentPassword"],
    }
  );

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   phone: "",
    //   currentPassword: "",
    //   newPassword: "",
    //   confirmPassword: "",
    // },
  });

  const [userImage, setUserImage] = useState<string | null>(null);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data);
  };
                          
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imgURL = URL.createObjectURL(event.target.files[0]);
      setUserImage(imgURL);
    }
  };

  return (
    <Card className="border-none p-10 bg-white shadow-lg rounded-md m-5">
      <Form {...form}>
        {/* ✅ Only ONE form element */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex items-start justify-between gap-5 border-b border-gray-500 pb-7">
            {/* Image Upload Section */}
            <div className="w-[20%] p-5 border border-gray-500">
              <div className="relative">
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
                <Label
                  htmlFor="picture"
                  className="text-center cursor-pointer absolute bottom-0 p-3 bg-black opacity-40 text-white w-full text-lg font-semibold"
                >
                  Upload Photo
                </Label>
                <Input
                  id="picture"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* Basic Info Form */}
            <div className="flex-1">
              <p className="text-xl text-primary font-semibold mb-5">
                Update Your Basic Information
              </p>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-full"
                        placeholder="Enter your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-full"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-full"
                        placeholder="Enter your phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-primary h-12 w-full mt-5">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Password Change Section */}
          <div className="w-[50%] mt-10">
            <p className="text-xl text-primary font-semibold mb-5">
              Change Password
            </p>

            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-gray-300 w-full"
                      type="password"
                      placeholder="Current password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-gray-300 w-full"
                      type="password"
                      placeholder="New password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-gray-300 w-full"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-primary h-12 w-full">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
