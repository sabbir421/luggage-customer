/** @format */

"use client";

/** @format */
import React, { useState, useEffect, useRef } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  StandaloneSearchBox,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import ClientLandingNav from "../components/ClientLandingNav";
import Image from "next/image";

// --
import { fetchStoreList } from "../store/storeSlice/storeSlice";
import { setSelectedStore } from "../store/storeSlice/storeSlice";

import PrivateRoute from "../components/PrivateRoute";
import Footer from "../components/Footer";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh)",
};

const Clientslandingone = () => {
  const router = useRouter();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { storeList, isLoading, error, userSearchLocation } = useSelector(
    (state) => state.storeData
  );
  const { token } = useSelector((state) => state.userData);

  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [distance, setDistance] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(Array(12).fill(true));
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    handleLocation();
  }, []);

  useEffect(() => {
    dispatch(
      fetchStoreList({
        lat: coords.lat || userSearchLocation?.mapLat,
        lan: coords.lng || userSearchLocation?.mapLan,
        allDay: false,
        rating: false,
      })
    );
  }, [dispatch, coords.lat, coords.lng]);

  const parisCoords = {
    lat: 48.864716,
    lng: 2.349014,
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { accuracy, latitude, longitude } = position.coords;
          setCoords({
            lat: userSearchLocation?.mapLat || latitude,
            lng: userSearchLocation?.mapLan || longitude,
          });
          setDistance(accuracy);
        },
        (error) => {
          setCoords(parisCoords);
        }
      );
    } else {
      setCoords(parisCoords);
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAx4y25_6KntkbpgQ3DulOMasAW6MFwrXY",
    libraries,
    // mapIds: ["c374e90572703627"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  const toggleCollapse = (index) => {
    setIsCollapsed((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const submitButton = (storeInfo) => {
    dispatch(setSelectedStore(storeInfo));
    if (token) {
      router.push({
        pathname: "/checkout",
      });
    } else {
      router.push("/login");
    }
  };

  const formatTime = (startTime, closeTime) => {
    if (
      startTime === "undefined:undefined" &&
      closeTime === "undefined:undefined"
    ) {
      return "24 Hours";
    }

    const formatSingleTime = (timeString) => {
      if (!timeString) return "";
      const [hours, minutes] = timeString.split(":").map(Number);
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`;
    };

    return `${formatSingleTime(startTime)} - ${formatSingleTime(closeTime)}`;
  };

  const handlePaceChange = () => {
    const [place] = inputRef?.current?.getPlaces();
    if (place) {
      setCoords({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const handleMarkerHover = (markerId) => {
    setActiveMarker(markerId);
  };

  const handleMarkerLeave = () => {
    setActiveMarker(null);
  };

  return (
    <section className="w-full h-screen">
      <ClientLandingNav />

      <div className="clientLandingOneMain flex flex-col lg:flex-row">
        {/* Left: Store List */}

        <div
          className="clientLandingStoreHolder w-full lg:w-1/3 p-4"
          style={{ marginTop: "-25px" }}
        >
          <div className="w-full md:w-3/3">
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handlePaceChange}
            >
              <input
                className="w-[100%] p-2 mt-2 rounded-md border border-gray-200 md:mb-4 mb-4"
                type="text"
                placeholder="Paris, France"
              />
            </StandaloneSearchBox>
          </div>
          {isLoading && <p>Loading stores...</p>}
          {error && <p>Error: {error}</p>}
          {!isLoading && storeList?.length > 0 ? (
            storeList.map((store, index) => (
              <div
                key={store.id}
                className="storeCard p-4 mb-4 border border-gray-300 rounded-md shadow-sm"
              >
                <div className="storeInfo flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="storeLogo w-16 h-16 rounded-md">
                      <Image
                        width={100}
                        height={100}
                        className="storeLogo w-16 h-16 rounded-md"
                        src={store?.storeImageUrl}
                      />
                    </div>
                    <div className="ml-4">
                      <h1 className="text-black text-lg font-bold">
                        {store.businessName}
                      </h1>
                      <p className="text-slate-500 text-sm">{store.address}</p>

                      <div className="ratingContainer flex items-center">
                        <Rating
                          name="disabled"
                          value={store.averageRating}
                          precision={0.5}
                          disabled
                          icon={<StarIcon style={{ fontSize: "14px" }} />}
                          emptyIcon={<StarIcon style={{ fontSize: "14px" }} />}
                        />
                        <p className="text-slate-500 font-normal text-sm ml-2">
                          {store.totalReview}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    {/* {store.distance.toFixed(1)} KM from your location */}
                  </p>
                </div>

                {/* Collapsible details */}
                <button
                  onClick={() => toggleCollapse(index)}
                  className="toggleCollapseBtn mt-2 text-blue-500"
                >
                  {isCollapsed[index] ? "▼ more" : "▲ less"}
                </button>

                {!isCollapsed[index] && (
                  <div className="mt-4">
                    <div className="openingHours text-sm">
                      <p>
                        Monday:{" "}
                        {store.mondayStatus
                          ? formatTime(
                              store.mondayStrtTime,
                              store.mondayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Tuesday:{" "}
                        {store.tuesdayStatus
                          ? formatTime(
                              store.tuesdayStrtTime,
                              store.tuesdayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Wednesday:{" "}
                        {store.wednesdayStatus
                          ? formatTime(
                              store.wednesdayStrtTime,
                              store.wednesdayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Thursday:{" "}
                        {store.thursdayStatus
                          ? formatTime(
                              store.thursdayStrtTime,
                              store.thursdayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Friday:{" "}
                        {store.fridayStatus
                          ? formatTime(
                              store.fridayStrtTime,
                              store.fridayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Saturday:{" "}
                        {store.saturdayStatus
                          ? formatTime(
                              store.saturdayStrtTime,
                              store.saturdayCloseTime
                            )
                          : "Closed"}
                      </p>
                      <p>
                        Sunday:{" "}
                        {store.sundayStatus
                          ? formatTime(
                              store.sundayStrtTime,
                              store.sundayCloseTime
                            )
                          : "Closed"}
                      </p>
                    </div>
                    <div className="text-center mt-4">
                      <button
                        onClick={() => submitButton(store)}
                        className="bg-orange-500 text-white py-2 px-4 rounded-md"
                      >
                        Select Store
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="storeCard text-center p-4 border border-gray-300 rounded-md">
              <p className="text-lg font-bold">No stores available</p>
              <p className="text-gray-500">
                Please check back later or try a different location.
              </p>
            </div>
          )}
        </div>

        {/* Right: Map */}
        <div className="clientLandingMapHolder w-full lg:w-2/3 h-[500px] lg:h-auto rounded-md">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{
              lat: storeList[0]?.mapLat || coords?.lat,
              lng: storeList[0]?.mapLan || coords.lng,
            }}
            zoom={10}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              // mapId: "c374e90572703627",
            }}
          >
            {storeList.map((store) => (
              <MarkerF
                key={store.id}
                position={{ lat: store.mapLat, lng: store.mapLan }}
                icon={{
                  url: "/location.png",
                  scaledSize: { width: 45, height: 45 },
                }}
                onMouseOver={() => handleMarkerHover(store.id)}
                onMouseOut={handleMarkerLeave}
              >
                {activeMarker === store.id && (
                  <InfoWindow
                    position={{ lat: store.mapLat, lng: store.mapLan }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <h4>{store.businessName}</h4>
                      <img
                        src={store.storeImageUrl}
                        alt={store.businessName}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </div>
                  </InfoWindow>
                )}
              </MarkerF>
            ))}
          </GoogleMap>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Clientslandingone;
