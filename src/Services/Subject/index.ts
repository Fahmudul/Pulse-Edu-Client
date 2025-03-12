"use server";

// import { IAvailability } from "@/types/global";

const backendUrl = process.env.BACKEND_URL as string;
export const getAllSubject = async () => {
  try {
   
    const res = await fetch(`${backendUrl}/subject/`);
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to get all subject");
  }
};
