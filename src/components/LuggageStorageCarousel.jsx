import React, { useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  fetchStoreList,
  fetchStoreListByCountry,
} from "../store/storeSlice/storeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function LuggageStorageCarousel({ area }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData);
  const { storeList } = useSelector((state) => state.storeData);
  console.log("---------------storeList-----------", storeList);

  useEffect(() => {
    dispatch(fetchStoreListByCountry({ token, country: area }));
  }, [area, token]);
  const locations = [
    {
      image: "/img/paris1.jpg",
      title: "Quai De Gesvres",
      rating: "4.9/5",
      reviews: "785 reviews",
      price: "€4.5 per day/luggage",
    },
    {
      image: "/img/paris2.jpg",
      title: "Rue De La Verrerie",
      rating: "4.9/5",
      reviews: "2261 reviews",
      price: "€4.5 per day/luggage",
    },
    {
      image: "/img/paris3.jpg",
      title: "Rue Saint-Martin",
      rating: "5/5",
      reviews: "2247 reviews",
      price: "€4.5 per day/luggage",
    },
    {
      image: "/img/paris4.jpg",
      title: "Rue de Rivoli",
      rating: "4.8/5",
      reviews: "1234 reviews",
      price: "€4.8 per day/luggage",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 3 cards on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2, // Show 2 cards on tablets
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1, // Show 1 card on mobile
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Luggage Storage Locations in {area}
        </h2>
        <p className="mt-4 text-gray-600">
          Discover safe and convenient luggage storage spots around the city.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          containerClass="carousel-container"
          itemClass="px-4" // Add spacing between cards
        >
          {storeList.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={store?.storeImageUrl}
                  alt={store?.businessName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {store.businessName}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="text-yellow-500 font-medium">
                    ★ {store.averageRating}
                  </span>{" "}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="text-yellow-500 font-medium">
                    {store.address}
                  </span>{" "}
                </p>
                <p className="text-lg font-semibold text-gray-700 mt-2">
                  {store.currencySymbol} {store?.price}
                  per day/luggage
                </p>

                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
