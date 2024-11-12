/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicPost } from "../../utils/apiCaller";

export const fetchUserData = createAsyncThunk(
  "user login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/signup", data);
      return response.payload;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userLoginSlice = createSlice({
  name: "userToken",

  initialState: {
    isLoading: false,
    token: "",
    error: null,
    loginUser: null,
    loginSuccess: false,
  },

    reducers: {
      logoutUser: (state) => {
        state.isLoading = false;
        state.token = "";
        state.loginUser = null;
        state.error = null;
        state.loginSuccess = false;
      },
    },

  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action?.payload?.api_token?.access;
      state.loginUser = action.payload;
      state.error = null;
      state.loginSuccess = true;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload?.response?.data?.message;
      state.loginSuccess = false;
    });
  },
});

export default userLoginSlice.reducer;
 export const { logoutUser } = userLoginSlice.actions;
