"use server";

import { IBooking } from "@/types/global";
import { revalidateTag } from "next/cache";

// import { IAvailability } from "@/types/global";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const createBookingRequest = async (payload: IBooking) => {
  console.log("booking", payload);
  try {
    const res = await fetch(`${backendUrl}/booking/create-booking-request`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // Authorization:
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    // console.log("Booking result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create booking request");
  }
};

export const getAllBooking = async (id: string) => {
  // console.log("booking g", id);
  try {
    const res = await fetch(`${backendUrl}/booking/${id}`, {
      next: {
        tags: ["booking"],
      },
    });
    const result = await res.json();
    console.log("result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to retrieve all booking");
  }
};

export const getSingleBooking = async (id: string) => {
  try {
    const res = await fetch(`${backendUrl}/booking/student/${id}`,{
      next:{
        tags:["studentBooking"]
      }
    });
    const result = await res.json();
    console.log("Booking result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create booking request");
  }
};
export const acceptBookingRequest = async (id: string, status: string) => {
  try {
    const res = await fetch(
      `${backendUrl}/booking/accept-booking-request/${id}?status=${status}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();
    revalidateTag("booking");
    console.log("Booking result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to accept booking request");
  }
};
