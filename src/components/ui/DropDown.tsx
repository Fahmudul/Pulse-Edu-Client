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
  const redirectUrl =
    role === "admin"
      ? "/dashboard/admin/analytics"
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
            router.push("/login");
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
