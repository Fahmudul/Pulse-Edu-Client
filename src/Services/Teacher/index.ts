"use server";

import { IAvailability } from "@/types/global";
import { getServerSession } from "next-auth";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const getTeacherDetails = async (id?: string) => {
  try {
    const res = await fetch(`${backendUrl}/teacher/get-teacher-details/${id}`);
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to get teacher availability");
  }
};
export const getMeTeacher = async (id?: string) => {
  try {
    const session = await getServerSession();
    const email = session?.user?.email;

    const res = await fetch(
      `${backendUrl}/teacher/get-teacher-details/${email}`
    );
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to get teacher availability");
  }
};

export const saveAvailability = async (payload: IAvailability) => {
  try {
    console.log("payload", payload);
    const session = await getServerSession();
    const email = session?.user?.email;
    // console.log("from line 21", token);
    const modifiedPayload = { availability: payload, email };
    const res = await fetch(`${backendUrl}/teacher/save-availability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedPayload),
    });
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    throw new Error("Failed to save teacher availability");
  }
};

export const getTeacherAvailability = async () => {
  try {
    const session = await getServerSession();
    const email = session?.user?.email;
    const res = await fetch(
      `${backendUrl}/teacher/get-teacher-availability/${email}`
    );
    const result = await res.json();
    // console.log("land le", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to get teacher availability");
  }
};

export const getAllTeacher = async () => {
  try {
    const res = await fetch(`${backendUrl}/teacher`);
    const result = await res.json();
    // console.log("teacher", result);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all teacher");
  }
};
