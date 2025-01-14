/** @format */

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import heroImg from "../images/luggage4.png";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchLocation } from "../store/storeSlice/storeSlice";
import { Box, Typography } from "@mui/material";

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

      // if (token) {
      //   router.push("/clientslandingone");
      // } else {
      //   router.push("/login");
      // }
      router.push("/clientslandingone");
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
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "3.5rem" },
            color: "#222",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            "&::before": {
              content: '""',
              position: "absolute",
              left: "0",
              bottom: "-5px",
              width: "100%",
              height: "5px",
              background: "linear-gradient(90deg, #ff9a9e, #fad0c4)",
              zIndex: 1,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.4s ease-in-out",
            },
            "&:hover::before": {
              transform: "scaleX(1)",
            },
            "&:hover": {
              color: "linear-gradient(90deg, #ff9a9e, #fad0c4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
            "& span": {
              display: "inline-block",
              animation: "float 3s ease-in-out infinite",
            },
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        >
          Discover The Nearest <span>Luggage Store</span> {area || ""}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.5rem" },
            color: "transparent",
            backgroundImage: "linear-gradient(45deg, #ff512f, #dd2476)",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
            textShadow: "0px 3px 8px rgba(255, 81, 47, 0.5)",
            marginBottom: "1rem",
            transition: "transform 0.3s ease, text-shadow 0.5s ease",
            "&:hover": {
              transform: "scale(1.1)",
              textShadow: "0px 5px 15px rgba(255, 81, 47, 0.8)",
            },
            "&::after": {
              content: '""',
              display: "block",
              width: "60%",
              height: "2px",
              margin: "0.5rem auto 0",
              background: "linear-gradient(90deg, #ff512f, #dd2476)",
              borderRadius: "1px",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "80%",
            },
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
            gap: 3,
            mt: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["SECURED", "CHEAP", "EASY"].map((text) => (
            <Box
              key={text}
              sx={{
                padding: "12px 24px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1rem",
                textAlign: "center",
                color: "#222",
                background: "linear-gradient(145deg, #f3f4f6, #e5e7eb)",
                boxShadow:
                  "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px #ffffff",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow:
                    "8px 8px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px #ffffff",
                  background: "linear-gradient(145deg, #e2e8f0, #cbd5e1)",
                  color: "#007bff",
                },
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
          className="hero-image"
        />
      </Box>

      {/* Hover rotation styles */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          border-radius: 15px;
          transition: transform 0.5s ease;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        }

        .hero-image:hover {
          transform: rotate(360deg) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;
