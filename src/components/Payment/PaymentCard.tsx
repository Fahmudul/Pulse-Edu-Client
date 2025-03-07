"use client";
import { useAppSelector } from "@/Redux/hooks";
import { confirmPayment } from "@/Services/Payment";
import { IPaymentPayload } from "@/types/global";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { FaCcAmex } from "react-icons/fa6";
import { SiMastercard, SiVisa } from "react-icons/si";
import { toast } from "sonner";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const StripePaymentCard = ({
  payload,
}: {
  payload: Partial<IPaymentPayload>;
}) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [cardComplete, setCardComplete] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });
  const { id, name: studentName } = useAppSelector((state) => state.auth);
  const stripe = useStripe();
  const elements = useElements();

  // Create references for Stripe Elements mounting
  const cardNumberRef = React.useRef(null);
  const cardExpiryRef = React.useRef(null);
  const cardCvcRef = React.useRef(null);

  // Create and mount Stripe Elements when component loads
  useEffect(() => {
    if (!stripe || !elements) return;

    // Define styles for Stripe Elements
    const elementStyle = {
      base: {
        fontSize: "16px",
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        "::placeholder": {
          color: "#aab7c4",
        },
        padding: "10px 12px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    };

    // Create card elements
    const cardNumberElement = elements.create("cardNumber", {
      style: elementStyle,
    });
    const cardExpiryElement = elements.create("cardExpiry", {
      style: elementStyle,
    });
    const cardCvcElement = elements.create("cardCvc", { style: elementStyle });

    // Mount elements when refs are available
    if (cardNumberRef.current) cardNumberElement.mount(cardNumberRef.current);
    if (cardExpiryRef.current) cardExpiryElement.mount(cardExpiryRef.current);
    if (cardCvcRef.current) cardCvcElement.mount(cardCvcRef.current);

    // Add event listeners for completion status
    cardNumberElement.on("change", (event) => {
      setCardComplete((prev) => ({ ...prev, cardNumber: event.complete }));
    });

    cardExpiryElement.on("change", (event) => {
      setCardComplete((prev) => ({ ...prev, cardExpiry: event.complete }));
    });

    cardCvcElement.on("change", (event) => {
      setCardComplete((prev) => ({ ...prev, cardCvc: event.complete }));
    });

    // Cleanup function to unmount elements when component unmounts
    return () => {
      cardNumberElement.destroy();
      cardExpiryElement.destroy();
      cardCvcElement.destroy();
    };
  }, [stripe, elements]);

  // Get client secret for payment intent
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const res = await fetch(`${backendUrl}/payment/create-payment-intent`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ price: payload.price || 20 }),
        });
        const response = await res.json();
        // console.log(response);
        setClientSecret(response?.data?.clientSecret);
      } catch (error) {
        console.error(error);
      }
    };

    getClientSecret();
  }, [payload.price]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Payment processing... stay tune 😊");
    if (!stripe || !elements || !clientSecret) {
      console.log({ stripe, elements, clientSecret });
      toast.error("Payment system aren't available. Try again");
      return;
    }

    // Make sure all required fields are complete
    if (!name.trim()) {
      toast.error("Please enter cardholder name");
      return;
    }

    if (!Object.values(cardComplete).every(Boolean)) {
      toast.error("Please fill in all card details");
      return;
    }

    setLoading(true);
    setName("");
    cardNumberRef.current = null;
    cardExpiryRef.current = null;
    cardCvcRef.current = null;

    try {
      // Get card element
      const cardElement = elements.getElement("cardNumber");

      if (!cardElement) {
        throw new Error("Card element not found");
      }

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: name,
            },
          },
        }
      );

      if (error) {
        toast.error(error.message || "Payment failed");
      } else if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.status);
        const paymentDetails = {
          price: paymentIntent.amount,
          paymentId: paymentIntent.id,
          student: id,
          teacher: payload.teacher,
          courseName: payload.courseName,
          status: "Success",
          currency: paymentIntent.currency,
          studentName: name,
          method:
            paymentIntent.payment_method_types[0].charAt(0).toUpperCase() +
            paymentIntent.payment_method_types[0].slice(1),
          bookingId: payload.bookingId,
        };
        console.log(paymentDetails);
        setName("");
        elements.getElement("cardNumber")?.clear();
        elements.getElement("cardExpiry")?.clear();
        elements.getElement("cardCvc")?.clear();
        const res = await confirmPayment(paymentDetails);
        // const response = await res.json();
        console.log(res);
        if (res?.success) {
          toast.success(res?.message, { id: toastId });
        }
        // Add redirect or success handling here
        console.log(paymentIntent);
      } else {
        toast.warning(`Payment status: ${paymentIntent.status}`);
      }
    } catch (err) {
      console.error("Payment error:", err);
      toast.error("An error occurred during payment processing", {
        id: toastId,
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md  mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Details
          </h2>
          <div className="flex space-x-2 ml-2">
            <SiVisa className="w-6 h-6" />
            <SiMastercard className="w-6 h-6" />
            <FaCcAmex className="w-6 h-6" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Holder Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-900"
              placeholder="John Smith"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <div
              ref={cardNumberRef}
              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-900"
            />
          </div>

          <div className="flex space-x-4 mb-6">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <div
                ref={cardExpiryRef}
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-900"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <div
                ref={cardCvcRef}
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-900"
            style={{
              backgroundColor: "#093B3B",
            }}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
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
              </span>
            ) : (
              "Pay Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StripePaymentCard;
