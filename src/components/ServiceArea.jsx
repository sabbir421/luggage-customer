import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const sections = {
  area: [
    { name: "USA", code: "us" },
    { name: "UK", code: "gb" },
    { name: "France", code: "fr" },
    { name: "Canada", code: "ca" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Thailand", code: "th" },
    { name: "Nepal", code: "np" },
    { name: "Maldives", code: "mv" },
    { name: "Germany", code: "de" },
    { name: "Dubai", code: "ae" },
    { name: "Portugal", code: "pt" },
    { name: "China", code: "cn" },
    { name: "Türkiye", code: "tr" },
    { name: "Australia", code: "au" },
    { name: "New Zealand", code: "nz" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Japan", code: "jp" },
    { name: "Mexico", code: "mx" },
    { name: "Indonesia", code: "id" },
    { name: "Singapore", code: "sg" },
    { name: "Switzerland", code: "ch" },
  ],
};

const ServiceArea = () => {
  const router = useRouter();

  const handleCityClick = (city) => {
    router.push(`/area/${city.toLowerCase()}`);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "90%",
        mx: "auto",
        backgroundColor: "#fff5f5",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Object.entries(sections).map(([continent, countries]) => (
        <Box key={continent} sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.8rem",
              textAlign: "center",
              mb: 2,
              color: "#ff5f6d",
            }}
          >
            Explore Our Service Areas
          </Typography>
          <Divider
            sx={{
              width: "80px",
              height: "4px",
              backgroundColor: "#ff5f6d",
              mx: "auto",
              mb: 4,
            }}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "16px",
            }}
          >
            {countries.map(({ name, code }, index) => (
              <Box
                key={index}
                onClick={() => handleCityClick(name)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Image
                  src={`https://flagcdn.com/w40/${code}.png`}
                  alt={`${name} Flag`}
                  width={40}
                  height={30}
                  style={{ marginRight: "12px" }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceArea;
