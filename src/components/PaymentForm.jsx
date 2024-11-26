import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutButton = ({ data }) => {
  console.log(data);

  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const session = await response.json();

    // Redirect to Stripe Checkout

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      style={{
        backgroundColor: "#f3380e",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
      onClick={handleClick}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
