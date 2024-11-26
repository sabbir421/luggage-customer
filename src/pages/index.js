/** @format */
"use client";
import Hero from "../components/Hero";
import RootLayout from "../components/Layout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ReviewCard from "../components/ReviewCard";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import LuggageStorageSection from "../components/LuggageStorageSection";
import FAQSection from "../components/FAQSection";

import ServiceArea from "../components/ServiceArea";
// import NavBar from "@/components/NavBar";

export default function Home() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Excellent service, highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "Great quality, but could improve delivery time.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 3,
      review: "Decent experience, but there are areas to improve.",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      review: "Absolutely loved it! Will definitely come back.",
    },
    {
      id: 5,
      name: "Kane",
      rating: 4,
      review: "Great quality, but could improve delivery time.",
    },
    {
      id: 6,
      name: "Oichael",
      rating: 3,
      review: "Decent experience, but there are areas to improve.",
    },
  ];
  const router = useRouter();
  const { token, loginUser } = useSelector((state) => state.userData);

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col justify-between pl-4 pr-4">
        <Hero />

        <section>
          <HowItWorksSection />
        </section>
        {/* <section>
          <CountryMapView />
        </section> */}
        <section>
          <FeaturesSection />
        </section>
        <section
          style={{ marginBottom: "30px" }}
          className="py-10 px-4 bg-gray-50"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <LuggageStorageSection />
        </section>
        <section>
          <FAQSection />
        </section>
        <section>
          <ServiceArea />
        </section>
      </main>
    </RootLayout>
  );
}
