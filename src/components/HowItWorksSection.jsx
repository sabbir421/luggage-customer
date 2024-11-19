import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StoreIcon from "@mui/icons-material/Store";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const steps = [
  {
    icon: <CheckCircleIcon sx={{ fontSize: 60, color: "#4caf50" }} />,
    title: "Search online",
    description: "Search online and choose a convenient location. Your bag protection is activated upon booking online.",
  },
  {
    icon: <StoreIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
    title: "Head to the store and book store",
    description: "Drop off your bags by showing your confirmation to a store employee.",
  },
  {
    icon: <DirectionsWalkIcon sx={{ fontSize: 60, color: "#2196f3" }} />,
    title: "Enjoy the day",
    description: "Make the most out of your day, then show your confirmation to pick up your stuff.",
  },
];

const HowItWorksSection = () => {
  return (
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How it works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 2,
                backgroundColor: "#f3eaff",
                borderRadius: 2,
                height: "300px", // fixed height
                width: "350px",  // fixed width
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // to evenly distribute content
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {step.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {step.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4, px: 4, borderRadius: 3, fontWeight: "bold" }}
      >
        Find closest locations
      </Button>
    </Container>
  );
};

export default HowItWorksSection;
