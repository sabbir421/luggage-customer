/** @format */

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapView = () => {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = { lat: 51.5074, lng: -0.1278 };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/*  */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
