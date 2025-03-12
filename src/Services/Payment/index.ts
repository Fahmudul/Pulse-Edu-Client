"use server";

import { IPaymentPayload } from "@/types/global";
import { revalidateTag } from "next/cache";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const confirmPayment = async (payload: IPaymentPayload) => {
  console.log("booking", payload);
  try {
    const res = await fetch(`${backendUrl}/payment/confirm-payment`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    console.log("payment result ", result);
    if (result?.success) {
      revalidateTag("studentBooking");
    }
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create booking request");
  }
};

export const getALlPayment = async (id: string) => {
  try {
    const res = await fetch(`${backendUrl}/payment/${id}`);
    const result = await res.json();
    console.log("payment result ", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch payment");
  }
};
