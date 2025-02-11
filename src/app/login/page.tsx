"use client";
import React from "react";
import { Github } from "lucide-react";
import { SlSocialGoogle } from "react-icons/sl";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
export type TInputFields = {
  email: string;
  password?: string;
};
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TInputFields>();
  const onSubmit: SubmitHandler<TInputFields> = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Logging in...");
    signIn("credentials", { ...data }).then((res) => {
      if (res?.error) {
        toast.error(res.error, { id: toastId });
      } else {
        toast.success("Login successful", { id: toastId, duration: 2000 });
        fetch("/api/auth/refresh").then((res) => res.json());
      }
    });
  };
  const socialLogins = [
    {
      name: "Google",
      icon: <SlSocialGoogle className="w-6 h-6" />,
      bgColor: "#e8d3a7",
      textColor: "#000",
      onClick: () => signIn("google"),
    },
    {
      name: "Github",
      icon: <Github className="w-6 h-6" />,
      bgColor: "#fee5b5",
      textColor: "#131f22",
      onClick: () => signIn("github"),
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#131f22" }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
      >
        <h2
          style={{ color: "#fee5b5" }}
          className="text-3xl font-bold text-center mb-8"
        >
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              {...register("email", { required: true })}
              placeholder="Email"
              style={{
                backgroundColor: "#131f22",
                color: "#fee5b5",
                borderColor: "#fee5b5",
              }}
              className="w-full p-3 rounded border focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              placeholder="Password"
              {...register("password", { required: true })}
              style={{
                backgroundColor: "#131f22",
                color: "#fee5b5",
                borderColor: "#fee5b5",
              }}
              className="w-full p-3 rounded border focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#fee5b5",
              color: "#131f22",
            }}
            className="w-full p-3 rounded font-bold hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p style={{ color: "#fee5b5" }} className="mb-4">
            Or continue with
          </p>

          <div className="flex justify-center space-x-4">
            {socialLogins.map((social) => (
              <button
                key={social.name}
                type="button"
                style={{
                  backgroundColor: social.bgColor,
                  color: social.textColor,
                }}
                className="p-3 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                onClick={social.onClick}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
