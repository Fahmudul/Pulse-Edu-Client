"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutProvider } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckOutForm";
const stripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBILSHABLE_KEY as string,
  {
    betas: ["custom_checkout_beta_5"],
  }
);
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;
const Payment = () => {
  const [clientSecret, setClientSecret] = React.useState(null);
  React.useEffect(() => {
    const getClientSecret = async () => {
      const res = await fetch(`${backendUrl}/payment/create-checkout-session`, {
        method: "POST",
      });
      const response = await res.json();
      console.log(response);
      setClientSecret(response?.data?.clientSecret);
    };
    getClientSecret();
  }, []);
  console.log("client secret", clientSecret);
  if (clientSecret) {
    return (
      <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </CheckoutProvider>
    );
  } else {
    return null;
  }
};

export default Payment;
