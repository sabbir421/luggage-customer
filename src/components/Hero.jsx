/** @format */

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import heroImg from "../images/luggage4.png";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchLocation } from "@/store/storeSlice/storeSlice";
import { Box, Button, Typography } from "@mui/material";

const Hero = ({ area }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();

  const handlePlaceChange = () => {
    const [place] = inputRef.current.getPlaces();

    if (place) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      dispatch(
        setSearchLocation({
          mapLat: lat,
          mapLan: lng,
        })
      );

      if (token) {
        router.push("/clientslandingone");
      } else {
        router.push("/login");
      }
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        padding: "20px",
        borderRadius: "15px",
      }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      {/* Left side content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          textAlign: "left",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "3rem" },
            color: "#333",
            textAlign: "left",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
            marginBottom: "1rem",
          }}
        >
          Discover The Nearest Luggage Store {area || ""}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            color: "#333",
            textAlign: "center",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
            marginBottom: "1rem",
          }}
        >
          Only From $4/Day
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <LoadScript
            googleMapsApiKey="AIzaSyDaIOHljSeGOAM5dEgOecGc4GE1NfSWZQg"
            libraries={["places"]}
          >
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handlePlaceChange}
            >
              <input
                type="text"
                placeholder="Enter your location"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  marginBottom: "10px",
                  fontSize: "1rem",
                }}
              />
            </StandaloneSearchBox>
          </LoadScript>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 3,
          }}
        >
          {["SECURED", "CHEAP", "EASY"].map((text) => (
            <Box
              key={text}
              sx={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #666",
                fontWeight: "bold",
                fontSize: "0.875rem",
                color: "#333",
                textAlign: "center",
              }}
            >
              {text}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right side image */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={heroImg}
          alt="Luggage Storage Hero"
          width={500}
          height={300}
          style={{
            borderRadius: "15px",
            transition: "transform 0.3s ease",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          className="hover:scale-105"
        />
      </Box>
    </section>
  );
};

export default Hero;
