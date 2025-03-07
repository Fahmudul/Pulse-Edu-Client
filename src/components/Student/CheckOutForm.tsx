import React from "react";
import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";
import PayButton from "./PayBtn";

export const CheckoutForm = () => {
  const checkout = useCheckout();
  console.log(checkout);
  return (
    <form>
      <PaymentElement options={{ layout: "accordion" }} />
      <PayButton />
    </form>
  );
};
