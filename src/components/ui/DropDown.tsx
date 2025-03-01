import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function DropdownMenuDemo({ role }: { role: string }) {
  const redirectUrl =
    role === "admin" ? "/dashboard/admin/analytics" : "/dashboard/user/profile";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full w-10 h-10 border border-[#131f22]  flex justify-center items-center">
          <User className="text-primary" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <DropdownMenuItem className="hover:text-primary hover:bg-[#fee5b5]">
          <Link href={`${redirectUrl}`}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:text-primary hover:bg-[#fee5b5]"
          onClick={() => signOut()}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
