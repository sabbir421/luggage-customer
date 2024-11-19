import React from "react";
import { FaBriefcase, FaClock, FaBox, FaGlobe, FaStore } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaBriefcase />,
      title: "£3000 Bag Guarantee",
      description: "Your bags are safe with us.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Instant Support",
      description: "We're here to help anytime.",
    },
    {
      icon: <FaBox />,
      title: "5 Million Bags Stored",
      description: "Trusted by travelers worldwide.",
    },
    {
      icon: <FaGlobe />,
      title: "8,000+ Locations Worldwide",
      description: "Find us globally.",
    },
    {
      icon: <FaStore />,
      title: "Powered by Local Businesses",
      description: "Supporting local economies.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-600 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">
        Booked by Millions of Travellers Worldwide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center"
          >
            {/* Rotating Icon with Animation */}
            <div
              className="flex justify-center items-center mb-4 text-pink-500 text-5xl"
              style={{
                animation: "rotate 6s linear infinite", // Apply the rotating animation
              }}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      {/* Add Keyframes for Rotation */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
