/** @format */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoadScript } from "@react-google-maps/api";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

// ---->
import ClientLandingNav from "@/components/ClientLandingNav";
import { GoClockFill } from "react-icons/go";
import { BsFillLuggageFill } from "react-icons/bs";
import greenTick from "../images/vendor/greentick.svg";
import tracLocation from "../images/LocationSolid.svg";
import tracArro from "../images/traArr.svg";
import PrivateRoute from "@/components/PrivateRoute";

const libraries = ["places"];

const Ordertrackpage = () => {
  const { selectedOrder } = useSelector((state) => state.luggageBookingData);
  const { storeList } = useSelector((state) => state.storeData);
  const router = useRouter();
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const orderedStore = storeList.find(
    (element) => element.id === selectedOrder?.storeId
  );
  // date time from modal --->
  const [value, setValue] = useState(dayjs());
  // Function to get the day of the week
  const getDayOfWeek = (date) => {
    return dayjs(date).format("ddd");
  };

  // -----start
  const [startDay, setStartDay] = useState(new Date().getDate());
  const [startMonth, setStartMonth] = useState(new Date().getMonth() + 1);
  const [startDayWord, setStartDayWord] = useState(getDayOfWeek(new Date()));
  const [startTime, setStartTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  // -----end
  const [endDay, setEndDay] = useState(new Date().getDate());
  const [endMonth, setEndMonth] = useState(new Date().getMonth() + 1);
  const [endDayWord, setEndDayWord] = useState(getDayOfWeek(new Date()));
  const [endTime, setEndTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  // useEffect for time --->
  useEffect(() => {
    const now = new Date();
    setStartDay(now.getDate());
    setStartMonth(now.getMonth() + 1);
    setStartDayWord(getDayOfWeek(now));
    setStartTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );

    // for end time
    setEndDay(now.getDate());
    setEndMonth(now.getMonth() + 1);
    setEndDayWord(getDayOfWeek(now));
    setEndTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, []);

  // pricing

  const [applyedOffer, setApplyedOffer] = useState(0.0);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirections(response);
        const route = response.routes[0].legs[0];
        setTravelTime(route.duration.text);
      } else {
        console.error("Directions request failed due to " + response.status);
      }
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.log("---------------position-------------", position);

          setCoords({
            lat: latitude,
            lng: longitude,
          });
          // setDistance(accuracy);
        },
        (error) => {
          // setCoords({ lat: 51.5074, lng: -0.1278 });
        }
      );
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDaIOHljSeGOAM5dEgOecGc4GE1NfSWZQg",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  // ------
  const logSignupButton = () => {
    router.push({
      pathname: "/clientlandingtwo",
      //   query: { id: storeId },
    });
  };
  const getProgressPercentage = (status) => {
    switch (status) {
      case "Drop-off":
        return "33%";
      case "Dropped":
        return "67%";
      case "Picked-off":
        return "100%";
      default:
        return "0%";
    }
  };
  const progress = getProgressPercentage(selectedOrder?.status);
  console.log("-------------cords---------------", orderedStore);

  return (
    <PrivateRoute>
      <section assName="w-[100vw] h-[100vh]">
        <ClientLandingNav />
        <div className="orderTrack">
          <div className="clientLnadingStoreHolder ">
            <div className="px-4 py-2 bg-white w-full h-auto rounded-2xl mb-6 shadow-xl border border-slate-200">
              <div className="flex">
                <div className="w-[100px] h-[100px]  mr-4">
                  <Image
                    width={80}
                    height={80}
                    src={orderedStore?.storeImageUrl}
                    alt="store"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <h1 style={{ textAlign: "left" }}>
                    {selectedOrder?.storeName}
                  </h1>
                  <p style={{ textAlign: "left", fontSize: "12px" }}>
                    {selectedOrder?.location}
                  </p>
                  {/* <p style={{ textAlign: "left", fontSize: "16px" }}>
                    2 mins from your location
                  </p> */}
                  <p
                    className="text-yellow-500 font-extrabold text-sm"
                    style={{ marginBottom: "20px", marginLeft: "-70%" }}
                  >
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-slate-400 font-semibold">
                      {selectedOrder?.ratting}
                    </span>
                  </p>
                </div>
              </div>
              <div className=" w-[100%] h-[0.8px] bg-slate-400 "></div>

              {/*end of header 0000----->*/}

              {/* tracking  */}
              <div className="  bg-black w-full h-[80px] mt-[15px] rounded-md p-[10px] ">
                <div className=" w-full h-[15px] bg-[#D9D9D9] rounded-2xl ">
                  <div
                    className="h-full bg-[#EBD514] rounded-2xl"
                    style={{ width: progress }}
                  >
                    {""}
                  </div>
                </div>
                {/* end of bar ---> */}
                <h2 className="text-[#FFFFFF] font-medium mt-[3px] text-[12px] ">
                  Your booking is confirmed for {selectedOrder?.status} at store
                </h2>
                <p className="text-[#FFFFFF] text-[10px] mt-[-5px]">
                  Just walk in and hand in your bags. After placing your bag.
                  you can track your progress in your activities.
                </p>
              </div>
              <div className=" flex justify-between items-center p-[7px] bg-black w-full h-[35px] mt-[8px] rounded-md cursor-pointer ">
                <div className=" flex justify-between items-center gap-[8px] ">
                  <Image
                    src={tracLocation}
                    alt="icon"
                    className="w-[16px] h-[16px] "
                  />
                  <h3 className="text-[#FFFFFF]" style={{ fontSize: "16px" }}>
                    Directions to store
                  </h3>
                </div>
                <div className="">
                  <Image
                    src={tracArro}
                    alt="icon"
                    className="w-[12px] h-[12px] "
                  />
                </div>
              </div>
              <div className=" mt-5 w-[100%] h-[.5px] bg-slate-400 "></div>

              {/* end of tracking ==> */}

              <div className="  ">
                <div className=" mt-3 flex w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex justify-center items-center gap-[4px] ">
                    <div className="text-[18px] font-bold mb-[7px] ">
                      <BsFillLuggageFill />
                    </div>
                    <h1
                      className="text-[#1C1C28]"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Number of bags/luggages
                    </h1>
                  </div>

                  {/* end of number of luggage section */}
                </div>
              </div>
              <div className=" mt-5 w-[100%] h-[.5px] bg-slate-400 "></div>

              {/*end of  quentity counter--- */}

              {/* stat of booking date --> */}

              <div className="  mt-4">
                <div className="">
                  <div className="  flex w-[100%] justify-between items-center p-[3px]  ">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 w-full">
                      <div className="text-[18px] sm:text-[20px] text-gray-600">
                        <GoClockFill />
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm p-2 sm:p-4 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
                        <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 p-2 sm:p-3 hover:bg-slate-100 hover:rounded-md transition ease-in-out duration-300">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {startDay}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-500">
                              /
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {startMonth},
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {startDayWord},
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {startTime}
                            </p>
                          </div>
                        </div>

                        <h1 className="text-[24px] sm:text-[28px] font-bold mx-4 text-gray-700">
                          -
                        </h1>

                        <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 p-2 sm:p-3 hover:bg-slate-100 hover:rounded-md transition ease-in-out duration-300">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {endDay}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-500">
                              /
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {endMonth},
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {endDayWord}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-gray-700">
                              {endTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-[20px] w-[100%] h-[0.5px] bg-slate-400 "></div>

                {/* end of date ---> */}

                <div className=" w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex w-[100%] justify-between items-center   ">
                    <div className="flex justify-center items-center gap-[10px] ">
                      {/* <div className="text-[14px]  ">
                        <Image src={vect2} alt="icon" />
                      </div> */}
                      {/* <h1 className="text-[#7F7F7F] font-semibold ">
                        Add promo code
                      </h1> */}
                    </div>
                    {/* end of top ---> */}
                    <div className="text-black text-[12px] "></div>
                  </div>
                  <div className="   w-full  mt-[5px] ">
                    <div className="flex justify-between items-center">
                      <p>
                        {selectedOrder?.currencySymbol}{" "}
                        <span>{selectedOrder?.singlePrice} </span> per bag, per
                        day{" "}
                      </p>
                      <p>
                        {selectedOrder?.currencySymbol}{" "}
                        <span>{selectedOrder?.price} </span>{" "}
                      </p>
                    </div>
                    {/* end --- */}
                    <div className=" mt-[4px] flex justify-between items-center">
                      <p>Fees & taxes </p>
                      <p>
                        {selectedOrder?.currencySymbol}{" "}
                        <span> {selectedOrder?.tax} </span>{" "}
                      </p>
                    </div>
                    {/* end --- */}

                    <div className="flex justify-between items-center">
                      <p className="text-[#7F7F7F] font-normal ">
                        Offer Applied
                      </p>
                      <p>
                        {selectedOrder?.currencySymbol} -{" "}
                        <span>{applyedOffer} </span>
                      </p>
                    </div>
                    {/* end of  */}
                    <div className="flex justify-between items-center">
                      <p className="text-[#000000] font-bold ">Total</p>
                      <p className="text-[#000000] font-bold mr-[2px] ">
                        {selectedOrder?.currencySymbol}
                        <span className="text-[#000000] font-bold ml-[3px] ">
                          {selectedOrder?.subTotal}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* end of bottom ---> */}
                </div>

                <div className="mt-[10px] w-[100%] h-[0.5px] bg-slate-400 "></div>

                <div className="mt-[10px] w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex justify-start items-center gap-[4px] ">
                    <h1 className="text-[#000000] font-bold ">
                      What’s included in your booking?
                    </h1>
                  </div>
                  <div className=" mt-[8px]  ">
                    <div className="flex items-center gap-[10px] ">
                      <div className="text-[14px] ">
                        <Image src={greenTick} alt="icon" />
                      </div>
                      <p className="text-[#000000] text-[14px] font-normal mb-[2px] ">
                        Bag & Luggage Protection
                      </p>
                    </div>
                    {/*  */}
                    <div className="flex items-center gap-[10px] ">
                      <div className="text-[14px] ">
                        <Image src={greenTick} alt="icon" />
                      </div>
                      <p className="text-[#000000] text-[14px] font-normal mb-[2px] ">
                        Free Cancellation before check-in
                      </p>
                    </div>
                    {/*  */}
                    <div className="flex items-center gap-[10px] ">
                      <div className="text-[14px] ">
                        <Image src={greenTick} alt="icon" />
                      </div>
                      <p className="text-[#000000]  text-[14px] font-normal mb-[2px] ">
                        Customer Support - 24/7
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" mt-[10px] w-[100%] h-[0.8px] bg-slate-400 "></div>

                <div className="flex w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex justify-center items-center gap-[4px] ">
                    <p className="text-[#1C1C28] font-normal ">
                      You accept Doorap’s{" "}
                      <a
                        href="/terms-conditions"
                        className="text-[#1C1C28] font-bold "
                      >
                        Terms of Service{" "}
                      </a>
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="text-[#1C1C28] font-bold "
                      >
                        Privacy Policy
                      </a>{" "}
                      by making a payment through Apple Pay or any other payment
                      methods.
                    </p>
                  </div>
                  <div className="text-black text-[12px] "></div>
                </div>
                <div className=" mt-[20px] w-[100%] h-[1.0px] bg-slate-400 "></div>

                <div className=" mb-[20px] mt-[30px] w-full text-center flex flex-col justify-center items-center">
                  <div>
                    <p className="mt-[7px] mb-[10px]">
                      <span className=" text-black font-bold  ">
                        {" "}
                        Download Doorap
                      </span>{" "}
                      to add images of your bags for easier recognition at the
                      store & much more.
                    </p>
                  </div>
                  {/* <div className="text-center">
                    <button className="flex justify-center items-center gap-[10px] w-[320px] text-[#F4F4F4] py-[6px] bg-black font-normal rounded-[12px]">
                      <h1 className="mb-[4px]">
                        Sign Up or Log In to edit details
                      </h1>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* end of top --> */}

          {/*  */}

          {/* <GoogleMapView /> */}
        </div>
        {/* end ---> */}
      </section>
    </PrivateRoute>
  );
};

export default Ordertrackpage;

{
  /* <div className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[100%] sm:w-[100%] max-sm:w-[100%] ">
{coords.lat && coords.lng && isLoaded && (
  <GoogleMap
    mapContainerStyle={mapContainerStyle}
    center={coords}
    zoom={10}
  >
  
    <DirectionsService
      options={{
        destination: {
          lat: parseFloat(selectedOrder?.storeLat),
          lng: parseFloat(selectedOrder?.storeLan),
        },
        origin: coords,
        travelMode: "WALKING",
      }}
      callback={directionsCallback}
    />
    {directions && (
      <DirectionsRenderer
        options={{
          directions: directions,
        }}
      />
    )}
  </GoogleMap>
)}</div> */
}
