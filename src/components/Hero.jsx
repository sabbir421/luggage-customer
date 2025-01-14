/** @format */

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "../images/tourist1.png";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearchLocation } from "../store/storeSlice/storeSlice";
import { Box, Typography, Button, Grid } from "@mui/material";

const Hero = ({ area }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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
      router.push("/clientslandingone");
    }
  };

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(120deg, #ff4081, #ff80ab)",
        color: "#fff",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* Grid for responsive layout */}
      <Grid container spacing={2} justifyContent="center">
        {/* Left side content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                color: "#fff",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                animation: "fadeIn 1.2s ease-in-out",
              }}
            >
              Find Luggage Storage Near You {area || ""}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                marginBottom: "2rem",
                color: "#fff",
                animation: "fadeIn 1.4s ease-in-out",
              }}
            >
              Rent luggage from top stores, starting at just $4/day.
            </Typography>

            <Box
              sx={{
                width: "100%",
                marginBottom: "2rem",
                animation: "fadeIn 1.6s ease-in-out",
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
                    placeholder="Search your location"
                    required
                    style={{
                      width: "80%",
                      padding: "14px",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "1.2rem",
                      // outline: "none",
                      // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      marginBottom: "1rem",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  />
                </StandaloneSearchBox>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffeb3b",
                    color: "#212121",
                    padding: "12px 30px",
                    borderRadius: "25px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#fbc02d",
                    },
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => router.push("/clientslandingone")}
                >
                  Find Stores
                </Button>
              </LoadScript>
            </Box>

          </Box>
          
        </Grid>

        {/* Right side image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Image
              src={heroImg}
              alt="Luggage Rental Hero"
              width={400}
              height={350}
              style={{
                borderRadius: "15px",
                objectFit: "cover",
                // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
