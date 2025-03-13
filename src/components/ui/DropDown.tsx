"use client";
import { removeUser } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { handleLogout } from "@/Utils/handleLogout";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DropdownMenuDemo({ role }: { role: string }) {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const sessionUser = useSession();
  const redirectUrl =
    role === "admin"
      ? "/dashboard/admin/analytics"
      : role === "teacher"
      ? "/dashboard/teacher/profile"
      : "/dashboard/student/profile";
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full w-10 h-10 border border-[#131f22]  flex justify-center items-center">
          <User className="text-primary" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10 bg-white">
        <DropdownMenuItem className="hover:text-primary hover:bg-[#e8f6f3]">
          <Link href={`${redirectUrl}`}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:text-primary hover:bg-[#e8f6f3]">
          <button
            onClick={async () => {
              console.log("role is", role);
              if (role === "student") {
                dispatch(removeUser());
                // router.push("/login");
                console.log("redux user");
                await handleLogout();
                router.push("/login");
              } else if (role === "teacher") {
                // router.push("/login");
                console.log("session user signout");
                return signOut({ callbackUrl: "/login" });
              }
            }}
          >
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
