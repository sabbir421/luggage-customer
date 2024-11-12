/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { privateGet } from "../../utils/apiCaller";
import { NullIcon } from "@icons/material";

export const fetchStoreList = createAsyncThunk(
  "store list",
  async ({ token, lat, lan, allDay, rating }, { rejectWithValue }) => {
    try {
      const response = await privateGet(
        `/luggage/store/near/${lat}/${lan}/${rating}/${allDay}`,
        token
      );

      return response.payload;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const storeSlice = createSlice({
  name: "store",

  initialState: {
    isLoading: false,
    storeList: [],
    error: null,
    selectedStore: null,
    bookingDetails: null,
    userSearchLocation: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStoreList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.storeList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchStoreList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload?.response?.data?.message;
    });
  },

  reducers: {
    setSelectedStore: (state, { payload }) => {
      state.selectedStore = payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    setSearchLocation: (state, action) => {
      state.userSearchLocation = action.payload;
    },
    clearStoreData: (state) => {
      state.storeList = [];
      state.bookingDetails = null;
      state.userSearchLocation = null;
      state.selectedStore = null;
    },
  },
});

export const {
  setSelectedStore,
  setBookingDetails,
  setSearchLocation,
  clearStoreData,
} = storeSlice.actions;

export default storeSlice.reducer;
