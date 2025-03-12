"use client";
import Image from "next/image";
import user from "../../../../../public/assets/User.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { UpdateInformation } from "@/Services/Teacher";
import { GetImageURL } from "@/Utils/getImageUrl";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

// User information form schema

// Password change form schema
const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Define types based on schemas
type PasswordFormValues = z.infer<typeof passwordSchema>;

const Settings = () => {
  const session = useSession();
  const [imageUrl, setImageUrl] = useState(user.src); // Default image

  // User information form
  const userInfoForm = useForm();

  // Password change form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imgURL = URL.createObjectURL(file);
      setImageUrl(imgURL);
      userInfoForm.setValue("image", file);
      userInfoForm.trigger("image"); // Trigger validation
    }
  };

  const onInformationSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastid = toast.loading("Updating information...");
    let modifiedData = {
      ...data,
      email: session?.data?.user?.email,
      image: "",
    };
    // Handle user information update logic here
    if (data.image) {
      const imageUr = await GetImageURL(data.image as File);
      modifiedData = { ...modifiedData, image: imageUr };
    }
    const res = await UpdateInformation(modifiedData);
    if (res?.success) {
      toast.success("Information updated successfully", { id: toastid });
    } else {
      toast.error(res?.message, { id: toastid });
    }
    userInfoForm.reset();
  };

  const onChangePasswordSubmit: SubmitHandler<PasswordFormValues> = (data) => {
    console.log("Password change submitted:", data);
    // Handle password change logic here
  };

  return (
    <div className="p-10 bg-white shadow-lg rounded-md m-5">
      {/* Profile Picture Upload */}
      <div className="flex items-start gap-5 border-b border-gray-500 pb-7">
        <div className="w-[20%] p-8 border border-gray-500">
          {/* Image container */}
          <Label className="relative" htmlFor="picture">
            <Image src={user} alt="upload image" />
            <p className="text-center absolute bottom-0 p-3 bg-black opacity-40 text-white w-full text-lg font-semibold">
              Upload Photo
            </p>
          </Label>
          <Input
            id="picture"
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {/* Update User Info Form */}
        <div className="flex-1">
          <p className="text-xl text-primary font-semibold mb-5">
            Update Your Basic Information
          </p>
          <Form {...userInfoForm}>
            <form
              onSubmit={userInfoForm.handleSubmit(onInformationSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={userInfoForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your name"
                          value={session?.data?.user?.name!}
                          className="cursor-not-allowed"
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userInfoForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          value={session?.data?.user?.email!}
                          className="cursor-not-allowed"
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={userInfoForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Write about yourself" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={userInfoForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={userInfoForm.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hourly Rate</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Hourly rate"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-primary inline h-12">
                Save Changes
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Change Password Form */}
      <div className="w-[50%] mt-10">
        <p className="text-xl text-primary font-semibold mb-5">
          Change Password
        </p>
        <Form {...passwordForm}>
          <form
            onSubmit={passwordForm.handleSubmit(onChangePasswordSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={passwordForm.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Current password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={passwordForm.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="New password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={passwordForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-primary inline h-12">
              Change Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
