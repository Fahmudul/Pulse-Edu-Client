"use server";

import { IBooking } from "@/types/global";

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
    console.log("Booking result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create booking request");
  }
};
