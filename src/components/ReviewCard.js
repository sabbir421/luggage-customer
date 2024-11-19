import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 bg-white border border-transparent rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-10 pointer-events-none rounded-lg"></div>
      <div className="relative flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tl from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-2 ring-white">
            {review.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-gray-900">{review.name}</h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            {/* Ensure review.rating is a number or default to 0 */}
            {[...Array(review.rating || 0)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-3.5 2 1-4.5L2 8.5l4.5-.5L10 2l2.5 5.5 4.5.5-3.5 4.5L10 15z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed">
        {isExpanded ? review.review : `${review.review.substring(0, 100)}...`}
      </p>
      <button
        onClick={handleToggle}
        className="text-blue-500 mt-2 inline-block text-sm"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default ReviewCard;
