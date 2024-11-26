import React, { useState } from "react";
import {
  Box,
  Card,
  Avatar,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
  Container,
  Paper,
  Chip,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "./PaymentForm";
export default function Bookingdata() {
  const { selectedStore } = useSelector((state) => state.storeData);
  const { loginUser } = useSelector((state) => state.userData);

  const [quantity, setQuantity] = useState(1);
  const [checkInTime, setCheckInTime] = useState(
    selectedStore.wednesdayStrtTime || ""
  );
  const [checkOutTime, setCheckOutTime] = useState(
    selectedStore.wednesdayCloseTime || ""
  );

  // Determine today's store status dynamically
  const status = getStoreStatus(
    selectedStore.wednesdayStatus,
    selectedStore.wednesdayFull,
    checkInTime,
    checkOutTime
  );
  const data = {
    price: selectedStore.price * quantity,
    customrName: loginUser?.name,
    customerId: loginUser?.id,
    storeName: selectedStore?.storeName,
    storeId: selectedStore?.id,
    providerName: selectedStore?.providerName,
    providerId: selectedStore?.providerId,
    hour: 1,
    storeLat: selectedStore?.mapLat,
    storeLan: selectedStore?.mapLan,
    location: selectedStore?.address,
    quantity,
    checkOutTime,
    checkInTime,
    checkinDate: "",
    checkoutDate: "",
    total: selectedStore.price * quantity + selectedStore?.tax,
    tax: selectedStore?.tax,
    numOfDay: 1,
    storePrice: selectedStore?.price,

    // currency: store?.countryName === "France" ? "Euro" : "Pound",
    // currencySymbol: store?.countryName === "France" ? "€" : "£",
    // currencyCode: store?.countryName === "France" ? "EUR" : "GBP",
  };

  
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          background: "linear-gradient(135deg, #f4f4f4, #ffffff)",
        }}
      >
        {/* Store Info */}
        <Card
          elevation={4}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            p: 1,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fafafa",
          }}
        >
          <Avatar
            alt={selectedStore.businessName}
            src={selectedStore.areaImageUrl}
            sx={{
              width: 100,
              height: 100,
              mr: 2,
              border: "3px solid #3f51b5",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333", mb: 0.5 }}
            >
              {selectedStore.businessName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {selectedStore.bussinessType} - {selectedStore.cityName}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Address: {selectedStore.address}, {selectedStore.cityName},{" "}
              {selectedStore.countryName}
            </Typography>
            <Chip
              label={status === "Active" ? "Open Now" : "Closed"}
              color={status === "Active" ? "success" : "error"}
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontSize: "0.85rem",
              }}
            />
          </Box>
        </Card>

        {/* Check-in and Check-out Times */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#3f51b5" }}
          >
            Timings
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Check-in Time"
              type="time"
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Check-out Time"
              type="time"
              value={checkOutTime}
              onChange={(e) => setCheckOutTime(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Paper>

        {/* Quantity and Price */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#3f51b5" }}
          >
            Quantity
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconButton
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              color="primary"
              size="small"
            >
              <Remove />
            </IconButton>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mx: 2, color: "#333" }}
            >
              {quantity}
            </Typography>
            <IconButton
              onClick={() => setQuantity((prev) => prev + 1)}
              color="primary"
              size="small"
            >
              <Add />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              <strong>Price:</strong> {selectedStore.currencySymbol}
              {selectedStore.price * quantity}
            </Typography>
            <Typography variant="body1">
              <strong>Tax:</strong> {selectedStore.currencySymbol}
              {selectedStore.tax}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              Total: {selectedStore.currencySymbol}
              {selectedStore.tax + selectedStore.price * quantity}
            </Typography>
          </Box>
        </Paper>

        {/* Pay Now Button */}
        <Grid container justifyContent="center">
          <CheckoutButton data={data} />
        </Grid>
      </Paper>
    </Container>
  );
}

// Helper function to determine the store's status
const getStoreStatus = (dayStatus, fullDay, startTime, closeTime) => {
  if (!dayStatus) return "Closed"; // If the day is not active, it's Closed.
  if (fullDay) return "Active"; // If fullDay is true, always Active.

  // Parse times into Date objects for the current day
  const parseTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(new Date().setHours(hours, minutes, 0, 0));
  };

  const now = new Date();
  const start = parseTime(startTime);
  const close = parseTime(closeTime);

  return now >= start && now <= close ? "Active" : "Closed";
};
