/** @format */

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../utils/convertToSubcurrency";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("test");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      // Corrected path
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        setErrorMessage("Failed to create payment intent. Please try again.");
      });
  }, [amount]);
  const handleCheckOut = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Submit the elements to gather payment details
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Confirm the payment
    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/clientlandingtwo?amount=${amount}`,
      },
    });

    if (confirmError) {
      setErrorMessage(confirmError.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleCheckOut} className="bg-white p-2 rounded-md">
      <PaymentElement />
      {errorMessage && <div>{errorMessage}</div>}
      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount.toFixed(2)}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
