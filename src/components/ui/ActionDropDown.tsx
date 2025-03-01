import { useDeleteBlogMutation } from "@/Redux/Features/BlogApi/Blog.api";
import { useDeleteProjectMutation } from "@/Redux/Features/ProjectApi/Project.api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical, Eye, Trash2 } from "lucide-react";

import Link from "next/link";
import { toast } from "sonner";

export function ActionDropdown({
  record,
  type,
}: {
  record: { key: string };
  type: string;
}) {
  const [deleteBlog] = useDeleteBlogMutation(undefined);
  const [deleteProject] = useDeleteProjectMutation(undefined);
  let path;
  if (type === "project") {
    path = "/dashboard/admin/update-project";
  } else if (type === "blog") {
    path = "/dashboard/update-blog";
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full w-7 h-7    flex justify-center items-center">
          <EllipsisVertical />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto border bg-[#131f22] border-none">
        <DropdownMenuItem className="hover:bg-transparent ">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "#1a292c",
              color: "#fee5b5",
              border: "1px solid #fee5b5",
            }}
          >
            <Link
              href={`/${type}s/${record.key}`}
              className="flex items-center gap-1 "
            >
              <Eye size={16} />
              View
            </Link>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="">
          <Link href={`${path}/${record.key}`}>
            <button className="flex items-center gap-1 px-3 bg-transparent border-[#fee5b5] border h-8 text-sm text-[#fee5b5] rounded hover:opacity-80 transition-opacity hover:bg-transparent">
              <Edit size={16} />
              Edit
            </button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "#1a292c",
              color: "#fee5b5",
              border: "1px solid #fee5b5",
            }}
            onClick={async () => {
              const toastId = toast.loading(`Deleting ${type}...`);
              let result;
              switch (type) {
                case "project":
                  result = await deleteProject(record.key);
                  break;
                case "blog":
                  result = await deleteBlog(record.key);
                  break;
              }
              if (result?.data?.success) {
                toast.success(`${type} Deleted Successfully`, { id: toastId });
              } else {
                toast.error(`Failed to delete ${type}`, { id: toastId });
              }
            }}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
