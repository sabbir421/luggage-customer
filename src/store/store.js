/** @format */
"use client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import counterReducer from "./counterSlice";
import { userReducer } from "./userSlice";
import { storeReducer } from "./storeSlice";
import { bookingReducer } from "./bookingSlice.js";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  userData: userReducer,
  storeData: storeReducer,
  luggageBookingData: bookingReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// Create persistor
export const persistor = persistStore(store);

export default store;
