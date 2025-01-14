import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BookingInfo from "../components/BookingInfo";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import ClientLandingNav from "../components/ClientLandingNav";

const mapContainerStyle = {
  width: "100%", // Ensures full width
  height: "100%", // Makes sure the height is 100% of its container
};

export default function CheckoutPage() {
  const { storeList, isLoading, error, selectedStore } = useSelector(
    (state) => state.storeData
  );
  const [coords, setCoords] = React.useState({
    lat: selectedStore?.mapLat || 48.8575475, // Fallback to a default value (e.g., Paris)
    lng: selectedStore?.mapLan || 2.3513765, // Fallback to a default value (e.g., Paris)
  });

  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDaIOHljSeGOAM5dEgOecGc4GE1NfSWZQg",
    libraries,
    mapIds: ["c374e90572703627"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  return (
    
    <Box sx={{ height: "100vh" }}>
      <ClientLandingNav/>
      <Grid container spacing={3}>
        {/* First column */}
        <Grid item xs={12} sm={4}>
          <BookingInfo />
        </Grid>
        {/* Second column */}
        <Grid item xs={12} sm={8}>
          <div
            className="clientLnadingMapHolder w-full h-full p-4"
            style={{ height: "calc(100vh - 48px)" }} // Adjust the height if necessary
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={coords}
              zoom={10}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
                mapId: "c374e90572703627",
              }}
            >
              {storeList.map((store) => (
                <MarkerF
                  key={store.id}
                  position={{
                    lat: store.mapLat,
                    lng: store.mapLan,
                  }}
                  icon={{
                    url: "/location.svg",
                    scaledSize: { width: 45, height: 45 },
                  }}
                />
              ))}
            </GoogleMap>
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
}
