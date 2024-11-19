import React from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const sections = {
  Europe: [
    "Amsterdam",
    "Bologna",
    "Edinburgh",
    "Liverpool",
    "Naples",
    "Nice",
    "Oxford",
    "Palermo",
    "Paris",
    "Pisa",
    "Porto",
    "Prague",
    "Rome",
    "Rotterdam",
    "Seville",
    "Strasbourg",
    "Toulouse",
    "Turin",
    "Venice",
    "Vienna",
  ],
  Asia: ["Tokyo", "Bangkok", "Seoul", "Kuala Lumpur", "Jakarta", "Mumbai"],
  "United States": ["New York", "San Francisco", "Chicago", "Los Angeles"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
  "New Zealand": ["Auckland", "Wellington", "Christchurch"],
};

const ServiceArea = () => {
  const router = useRouter(); // Initialize router

  const handleCityClick = (city) => {
    router.push(`/area/${city.toLowerCase()}`); // Use router.push() for dynamic routing
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "90%",
        mx: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Object.entries(sections).map(([continent, cities]) => (
        <Box key={continent} sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              background: "linear-gradient(90deg, #ff5f6d, #ffc371)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {continent}
          </Typography>
          <Divider
            sx={{
              width: "100px",
              height: "4px",
              backgroundColor: "#ff5f6d",
              marginBottom: "16px",
              "&::after": {
                content: '""',
                display: "block",
                width: "100%",
                height: "4px",
                backgroundColor: "#ffc371",
                animation: "slide 3s infinite",
              },
              "@keyframes slide": {
                "0%": { transform: "translateX(-100%)" },
                "50%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(100%)" },
              },
            }}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "12px",
            }}
          >
            {cities.map((city, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#555",
                  cursor: "pointer",
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": {
                    color: "#ff5f6d",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => handleCityClick(city)} // Handle click event
              >
                {city}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceArea;
