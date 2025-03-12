"use client";
import { removeUser } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { handleLogout } from "@/Utils/handleLogout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DropdownMenuDemo({ role }: { role: string }) {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
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
        <DropdownMenuItem
          className="hover:text-primary hover:bg-[#e8f6f3]"
          onClick={() => {
            handleLogout();
            if (user) {
              console.log("Deleted from redux");
              dispatch(removeUser());
            }
            router.push("/login");
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
