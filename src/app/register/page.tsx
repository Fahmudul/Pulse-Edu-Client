"use client";
import React from "react";
import { Eye, EyeClosed, Github } from "lucide-react";
import { SlSocialGoogle } from "react-icons/sl";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleRegister } from "@/Utils/handleRegister";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
export type TRegistrationInputFields = {
  email: string;
  password: string;
  name: string;
};
const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    reset,
  } = useForm<TRegistrationInputFields>();
  const onSubmit: SubmitHandler<TRegistrationInputFields> = async (data) => {
    const toastId = toast.loading("Creating an account...");
    // console.log(data);
    const result = await handleRegister(data);
    if (result?.success) {
      toast.success("User created successfully!", { id: toastId });
    } else {
      const message = result?.message || "Something went wrong";
      toast.error(message, { id: toastId });
    }
    reset();
    router.push("/login");
  };
  const socialLogins = [
    {
      name: "Google",
      icon: <SlSocialGoogle className="w-6 h-6" />,
      bgColor: "#fff",
      textColor: "#093B3B",
      onClick: () => signIn("google"),
    },
    {
      name: "Github",
      icon: <Github className="w-6 h-6" />,
      bgColor: "#fff",
      textColor: "#093B3B",
      onClick: () => signIn("github"),
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#e8f4f4" }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div
        style={{ backgroundColor: "#fff" }}
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
      >
        <h2
          style={{ color: "#093B3B" }}
          className="text-3xl font-bold text-center mb-8"
        >
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              style={{
                backgroundColor: "#f5f9f9",
                color: "#093B3B",
                borderColor: "#093B3B",
              }}
              className="w-full p-3 rounded border focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              {...register("email", { required: true })}
              placeholder="Email"
              style={{
                backgroundColor: "#f5f9f9",
                color: "#093B3B",
                borderColor: "#093B3B",
              }}
              className="w-full p-3 rounded border focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <input
              placeholder="Password"
              {...register("password", { required: true })}
              style={{
                backgroundColor: "#f5f9f9",
                color: "#093B3B",
                borderColor: "#093B3B",
              }}
              className="w-full p-3 rounded border focus:outline-none"
              required
              type={showPassword ? "text" : "password"}
            />
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="w-4 h-4 text-gray-400" />
              ) : (
                <EyeClosed className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#093B3B",
              color: "#fff",
            }}
            className="w-full p-3 rounded font-bold hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">
            Already have an account?{" "}
            <Link className="text-teal-800 font-medium" href={"/login"}>
              Login
            </Link>
          </p>
          <p style={{ color: "#093B3B" }} className="mb-4">
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
                  border: "1px solid #093B3B",
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

export default RegisterPage;
