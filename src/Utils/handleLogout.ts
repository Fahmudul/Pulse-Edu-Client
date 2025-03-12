"use server";

import { cookies } from "next/headers";

export const handleLogout = async () => {
  const cookieStore = await cookies();
  console.log("cookie store", cookieStore.get("accessToken"));
  console.log("deleting cookie");
  cookieStore.delete("accessToken");
};
