import React, { useState, useEffect } from "react";
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
import CheckoutButton from "./PaymentForm";

export default function Bookingdata() {
  const { selectedStore } = useSelector((state) => state.storeData);
  const { loginUser } = useSelector((state) => state.userData);

  const [quantity, setQuantity] = useState(1);
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfDays, setNumOfDays] = useState(1); // Default to 1 day

  // Calculate the number of days between check-in and check-out dates
  let diffTime = 1;
  useEffect(() => {
    const calculateDuration = (checkInDate, checkOutDate) => {
      if (!checkInDate || !checkOutDate) return 1; // Default to 1 day if invalid input

      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      diffTime = checkOut - checkIn;
      if (diffTime <= 0) return 1; // Ensure valid date range

      const days = Math.floor(diffTime / (1000 * 3600 * 24)) + 1; // +1 to include the check-in day

      return days;
    };

    const days = calculateDuration(checkInDate, checkOutDate);
    setNumOfDays(days); // Update numOfDays based on the calculated duration
  }, [checkInDate, checkOutDate]); // Re-run when check-in or check-out date changes

  const totalPrice =
    selectedStore?.price * numOfDays * quantity + selectedStore?.tax;

  const data = {
    price: selectedStore?.price * quantity,
    customerName: loginUser?.name,
    customerId: loginUser?.id,
    storeName: selectedStore?.storeName,
    storeId: selectedStore?.id,
    providerName: selectedStore?.providerName,
    providerID: selectedStore?.providerID,
    storeLat: selectedStore?.mapLat,
    storeLng: selectedStore?.mapLan,
    location: selectedStore?.address,
    quantity,
    checkOutTime,
    checkInTime,
    checkinDate: checkInDate,
    checkoutDate: checkOutDate,
    total: totalPrice,
    tax: selectedStore?.tax,
    numOfDay: numOfDays,
    storePrice: selectedStore?.price,
    currency: selectedStore?.currency,
    currencySymbol: selectedStore?.currencySymbol,
    currencyCode: selectedStore?.currencyCode,
    hour: diffTime,
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
              label="Open Now"
              color="success"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontSize: "0.85rem",
              }}
            />
          </Box>
        </Card>

        {/* Check-in and Check-out */}
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
              label="Check-in Date"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2 }}
            />
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
              label="Check-out Date"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
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

        {/* Quantity and Price Section */}
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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quantity & Price
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                color="primary"
                onClick={handleDecreaseQuantity}
                disabled={quantity <= 1}
              >
                <Remove />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">{quantity}</Typography>
            </Grid>
            <Grid item>
              <IconButton color="primary" onClick={handleIncreaseQuantity}>
                <Add />
              </IconButton>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Total: {selectedStore?.currencySymbol}
                {totalPrice}
              </Typography>
              <Typography variant="body1">
                Days: {numOfDays} | Price per day:{" "}
                {selectedStore?.currencySymbol}
                {selectedStore?.price}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Payment Button */}
        <CheckoutButton data={data} />
      </Paper>
    </Container>
  );
}
