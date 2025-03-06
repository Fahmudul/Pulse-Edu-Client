"use server";

// import { IAvailability } from "@/types/global";
import { getServerSession } from "next-auth";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const getAllSubject = async () => {
  try {
    const session = await getServerSession();
    const email = session?.user?.email;
    const res = await fetch(`${backendUrl}/subject/`);
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to get all subject");
  }
};
