"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentCard from "./PaymentCard";
import { getSingleBooking } from "@/Services/Booking";
import { useAppSelector } from "@/Redux/hooks";
import { PaymentProps } from "@/types/global";
import StudentLoader from "../Student/StudentLoader";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBILSHABLE_KEY as string
);
const PaymentDetails = () => {
  const [paymentData, setPaymentData] = useState<PaymentProps>({});
  const [paymentDetailsReady, setPaymentDetailsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useAppSelector((state) => state?.auth);
  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    const getBookingDetails = async () => {
      const res = await getSingleBooking(id!);
      console.log(res);
      setLoading(false);
      setPaymentData(res?.data);
      setPaymentDetailsReady(true);
    };
    getBookingDetails();
  }, []);

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handlePayment = () => {
    if (!termsAccepted) return;
    setIsProcessing(true);
    setShowCard(true);
    setPaymentDetailsReady(false);
    setIsProcessing(false);
  };
  if (loading) {
    return (
      <div className="w-full text-xl font-bold text-primary h-[500px] flex justify-center items-center">
        <StudentLoader />
      </div>
    );
  } else if (!paymentData) {
    return (
      <div className="w-full text-xl font-bold text-primary h-[500px] flex justify-center items-center">
        You currently don't have any payment due
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 lg:flex-row w-full justify-between px-6 items-center">
      <div className="mx-auto max-w-3xl  bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#093B3B] text-white px-6 py-4">
          <h2 className="text-xl font-bold">Payment Details</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 p-6">
          {/* Left Column - Subject Image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-md bg-[#E8F6F3]/30 p-4">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={
                    paymentData?.subject?.imageUrl || "/placeholder-subject.jpg"
                  }
                  alt={paymentData?.subject?.name || ""}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-lg text-[#093B3B] mb-1">
                {paymentData?.subject?.name}
              </h3>
              <p className="text-gray-600 text-sm">Taught by</p>
              <p className="font-medium text-[#093B3B]">
                {paymentData?.teacher}
              </p>
            </div>
          </div>

          {/* Middle Column - Schedule & Details */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-4 h-full flex flex-col">
              <h3 className="font-bold text-md text-[#093B3B] mb-3 pb-2 border-b border-[#E8F6F3]">
                Class Schedule
              </h3>

              <div className="space-y-3 mb-4">
                {paymentData?.schedule?.map((slot, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#E8F6F3] rounded-md p-1 mr-3">
                      <span className="text-[#093B3B] text-xs font-medium uppercase">
                        {slot?.day?.substring(0, 3)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {slot.startTime} - {slot.endTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-sm mb-3">
                  <span className="font-medium text-gray-600">Duration:</span>
                  <p className="font-medium text-[#093B3B]">
                    {formatDate(paymentData?.duration?.startDate!)} -{" "}
                    {formatDate(paymentData?.duration?.endDate!)}
                  </p>
                </div>

                <div className="text-sm mb-3">
                  <span className="font-medium text-gray-600">
                    Total Sessions:
                  </span>
                  <p className="font-medium text-[#093B3B]">
                    {paymentData?.totalSessions} classes
                  </p>
                </div>

                <div className="text-sm">
                  <span className="font-medium text-gray-600">Status:</span>
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      paymentData?.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {paymentData?.status &&
                      paymentData?.status.charAt(0).toUpperCase() +
                        paymentData?.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div className="md:col-span-1">
            <div className="bg-[#E8F6F3]/30 rounded-lg p-4 h-full flex flex-col">
              <h3 className="font-bold text-md text-[#093B3B] mb-4 pb-2 border-b border-[#E8F6F3]">
                Payment
              </h3>

              <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Payment Method
                </p>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="mr-2 accent-[#093B3B]"
                  />
                  <label htmlFor="credit" className="flex items-center">
                    <span className="text-sm font-medium">Credit Card</span>
                    <div className="flex ml-2">
                      <div className="h-6 w-8 bg-gray-200 rounded mr-1"></div>
                      <div className="h-6 w-8 bg-gray-200 rounded"></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 mb-6 shadow-sm">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  Price Summary
                </p>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Price per session</span>
                  <span className="text-sm font-medium">
                    $
                    {(paymentData?.price && paymentData?.totalSessions
                      ? paymentData?.price / paymentData?.totalSessions
                      : 0
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sessions</span>
                  <span className="text-sm font-medium">
                    x {paymentData?.totalSessions}
                  </span>
                </div>
                <div className="pt-2 mt-2 border-t border-dashed border-gray-200 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-[#093B3B]">
                    ${paymentData?.price?.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="mt-1 mr-2 accent-[#093B3B]"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the Terms & Conditions and understand the
                    cancellation policy
                  </label>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={
                    (!termsAccepted &&
                      !paymentDetailsReady &&
                      !paymentData?.payBtn) ||
                    isProcessing
                  }
                  className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center
                  ${
                    termsAccepted && paymentDetailsReady && paymentData?.payBtn
                      ? "bg-[#093B3B] hover:bg-[#093B3B]/90"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                  transition-colors duration-200`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Make payment"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${showCard ? "visible" : "hidden"} border w-[30%]`}>
        <Elements stripe={stripePromise}>
          <StripePaymentCard
            payload={{
              price: paymentData?.price ? paymentData?.price : 0,
              bookingId: paymentData?.bookingId,
              courseName: paymentData?.subject?.name,
              teacher: paymentData?.teacher,
            }}
          />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentDetails;
