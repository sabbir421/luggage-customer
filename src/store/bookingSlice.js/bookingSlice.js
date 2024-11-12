/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  privateGet,
  privatePatch,
  privatePost,
  publicPost,
} from "../../utils/apiCaller";

export const luggageBooking = createAsyncThunk(
  "luggage booking",
  async ({ data, token }, { rejectWithValue }) => {
    try {
      const response = await privatePost("/luggage/store/booking", token, data);
      return response.payload;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getActiveOrder = createAsyncThunk(
  "active order list",
  async ({ token, customerId }, { rejectWithValue }) => {
    try {
      const response = await privateGet(
        `/luggage/store/booking/active/${customerId}`,
        token
      );

      return response.payload;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const cancelOrder = createAsyncThunk(
  "cancel order",
  async ({ token, data }, { rejectWithValue }) => {
    try {
      const response = await privatePatch(`/payment/refund`, token, data);

      return response.payload;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const luggageBookingSlice = createSlice({
  name: "luggage",

  initialState: {
    isLoading: false,
    orderList: [],
    error: null,
    setBookinginformation: null,
    selectedOrder: {},
  },

  //   reducers: {
  //     logoutUser: (state) => {
  //       state.isLoading = false;
  //       state.token = "";
  //       state.loginUser = null;
  //       state.error = null;
  //       state.loginSuccess = false;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(luggageBooking.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(luggageBooking.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(luggageBooking.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload?.response?.data?.message;
    });
    builder.addCase(getActiveOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getActiveOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderList = action.payload;
      state.error = null;
    });
    builder.addCase(getActiveOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload?.response?.data?.message;
    });
  },
  reducers: {
    setBookingInfo: (state, { payload }) => {
      state.setBookinginformation = payload;
    },
    clickedOrder: (state, { payload }) => {
      state.selectedOrder = payload;
    },
    clearBookingData: (state) => {
      state.orderList = [];
      state.selectedOrder = {};
      state.setBookinginformation = {};
    },
  },
});

export default luggageBookingSlice.reducer;
export const { setBookingInfo, clickedOrder, clearBookingData } =
  luggageBookingSlice.actions;
