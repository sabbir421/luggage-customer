/** @format */

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import heroImg from "../images/luggage.png";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchLocation } from "@/store/storeSlice/storeSlice";

const Hero = () => {
  const router = useRouter();
  const { token, loginUser } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [mapLat, setMapLat] = useState("");
  const [mapLan, setMapLan] = useState("");
  const [googleAddress, setGoogleAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const becomePartner = () => {
    const url = "https://partner.doorap.com/";
    window.open(url, "_blank");
  };
  const inputRef = useRef();
  const handlePaceChange = () => {
    const [place] = inputRef.current.getPlaces();

    if (place) {
      setMapLan(place.geometry.location.lng());
      setMapLat(place.geometry.location.lat());
      setGoogleAddress(place.formatted_address);
      dispatch(
        setSearchLocation({
          mapLat: place.geometry.location.lat(),
          mapLan: place.geometry.location.lng(),
        })
      );
      if (token) {
        router.push({
          pathname: "/clientslandingone",
        });
      } else {
        router.push({
          pathname: "/login",
        });
      }
    }
  };

  return (
    <section className="2xl:mt-[25px] xl:mt-[25px] lg:mt-[25px] md:mt-[2px] sm:mt-[2px] max-sm:mt-[2px] flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8 lg:gap-10 p-[3px]">
      <div className="mt-[30px] md:w-2/3 xl:w-1/2 flex flex-col">
        <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl max-sm:text-4xl text-black font-semibold mb-2 md:mb-3 xl:mb-4">
          Find The Nearest
        </h1>
        <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl max-sm:text-4xl text-black font-semibold mb-2 md:mb-3 xl:mb-4">
          Luggage Store
        </h1>
        <div className="mt-4 md:mt-6 xl:mt-8">
          <h2 className="text-gray-700 md:text-lg xl:text-xl">
            Only From $4/Day
          </h2>
        </div>
        <div className="mt-4 md:mt-6 xl:mt-8">
          <LoadScript
            googleMapsApiKey="AIzaSyDaIOHljSeGOAM5dEgOecGc4GE1NfSWZQg"
            libraries={["places"]}
          >
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handlePaceChange}
            >
              <input
                style={{
                  width: "68%",
                  padding: "5px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  height: "50px",
                  border: "1px solid gray",
                }}
                type="text"
                className="form-control"
                placeholder="Enter your location"
                required
              />
            </StandaloneSearchBox>
          </LoadScript>
        </div>
        <div className="py-[10px] 2xl:w-[66%] xl:w-[66%] lg:w-[66%] md:w-[97%] sm:w-[100%] max-sm:w-[100%] flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-between sm:justify-between max-sm:justify-between gap-3 mt-4 2xl:mr-10 xl:mr-10 lg:mr-10">
          <div className="flex justify-center items-end w-[100px] border border-gray-600 rounded-[15px] p-1 text-left">
            SECURED
          </div>
          <div className="flex justify-center items-end w-[100px] border border-gray-600 rounded-[15px] p-1 text-left">
            CHEAP
          </div>
          <div className="flex justify-center items-end w-[100px] border border-gray-600 rounded-[15px] p-1 text-left">
            EASY
          </div>
        </div>
      </div>
      {/* end of left side ---> */}
      <div className="h-[100%] 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[45%] sm:w-full max-sm:w-full w-full">
        <div className="w-full 2xl:ml-[50px] xl:ml-[50px] lg:ml-[50px] md:ml-[0px] sm:ml-[0px] max-sm:ml-[0px]">
          <Image
            src={heroImg}
            alt="hero"
            width={500}
            height={300}
            className="2xl:-mt-[50px] xl:-mt-[50px] lg:-mt-[50px] md:-mt-[20px] sm:-mt-[0px] max-sm:-mt-[0px]"
          />
        </div>
      </div>
      {/* end of right side ----> */}
    </section>
  );
};

export default Hero;
