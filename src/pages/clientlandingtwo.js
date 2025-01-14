/** @format */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ClientLandingNav from "@/components/ClientLandingNav";
import { GoClockFill } from "react-icons/go";
import { BsFillLuggageFill } from "react-icons/bs";
import vect2 from "../images/vendor/vec.svg";
import greenTick from "../images/vendor/greentick.svg";
import convertToSubcurrency from "@/utils/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";
import {
  luggageBooking,
  setBookingInfo,
} from "@/store/bookingSlice.js/bookingSlice";
import PrivateRoute from "@/components/PrivateRoute";
import Footer from "../components/Footer";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%", // Change from "190%" to "100%"
  height: "calc(100vh)", // Keep the height as is
};

// payment
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Clientlandingtwo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { storeList, isLoading, error, selectedStore } = useSelector(
    (state) => state.storeData
  );
  const { token, loginUser } = useSelector((state) => state.userData);
  const { setBookinginformation } = useSelector(
    (state) => state.luggageBookingData
  );
  const [coords, setCoords] = useState({
    lat: selectedStore?.mapLat,
    lng: selectedStore?.mapLan,
  });
  const [distance, setDistance] = useState(0);
  const [lugNumber, setLugNumber] = useState(1);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [paymentOptionModal, setPaymentOptionModal] = useState(false);

  // date time from modal --->
  const [value, setValue] = useState(dayjs());

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  // Function to get the day of the week
  const getDayOfWeek = (date) => {
    return dayjs(date).format("ddd");
  };

  // Function to handle setting the start time
  const handleSetStartTime = () => {
    setStartDay(value.date());
    setStartMonth(value.month() + 1);
    setStartDayWord(getDayOfWeek(value.toDate()));
    setStartTime(value.format("h:mm A"));
    setShowStartModal(false);
    setShowEndModal(true);
  };

  const handleEndTime = () => {
    setEndDay(value.date());
    setEndMonth(value.month() + 1);
    setEndDayWord(getDayOfWeek(value.toDate()));
    setEndTime(value.format("h:mm A"));
    setShowEndModal(false);
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
  let { payment_intent } = router.query;
  useEffect(() => {
    if (payment_intent) {
      const bookingData = {
        ...setBookinginformation,
        paymentId: payment_intent,
      };
      dispatch(luggageBooking({ data: bookingData, token }));
      router.push({
        pathname: "/orderHistory",
      });
    }
  }, [dispatch, token, payment_intent]);

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          //  setCoords({ lat: latitude, lng: longitude });
          setDistance(accuracy);
        },
        (error) => {
          //  setCoords({ lat: 51.5074, lng: -0.1278 });
        }
      );
    }
  };

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

  // button inc and dec function --->
  const inc = () => {
    {
      setLugNumber(lugNumber + 1);
    }
  };

  const dec = () => {
    if (lugNumber > 1) {
      setLugNumber(lugNumber - 1);
    }
  };

  const calculateNumberOfDays = () => {
    const startDate = new Date(
      new Date().getFullYear(),
      startMonth - 1,
      startDay
    );
    const endDate = new Date(new Date().getFullYear(), endMonth - 1, endDay);

    // Format the startDate and endDate to "DD-MM-YY"
    const formatDateToISO = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const formattedStartDate = formatDateToISO(startDate);
    const formattedEndDate = formatDateToISO(endDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return {
      numberOfDays: numberOfDays > 0 ? numberOfDays + 1 : 1,
      formattedStartDate,
      formattedEndDate,
    };
  };

  const { numberOfDays, formattedStartDate, formattedEndDate } =
    calculateNumberOfDays();

  // const numberOfDays = calculateNumberOfDays();
  const s_total = selectedStore?.price * lugNumber * numberOfDays;
  const totalpay = s_total + selectedStore?.tax;

  const finalPayment = parseFloat(parseFloat(totalpay).toFixed(2));

  const data = {
    customrName: loginUser?.name,
    customerId: loginUser?.id,
    storeName: selectedStore?.businessName,
    storeId: selectedStore?.id,
    providerName: selectedStore?.providerName,
    providerId: selectedStore?.providerID,
    hour: 0,
    quantity: lugNumber,
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    startTime: startTime,
    endTime: endTime,
    paymentStatus: "SUCCESS",
    status: "Drop-off",
    numOfDay: numberOfDays,
    discountBag: 0,
    discountPrice: 0,
    promoCode: 1,
    offerType: "Percentage",
    finalPayment,
  };

  const clickedOpenModal = () => {
    dispatch(setBookingInfo(data));
    setPaymentOptionModal(true);
  };

  return (
    <PrivateRoute>
      <section className="w-full h-screen">
        <ClientLandingNav />
        <div className="clientLnadingOneMain flex flex-col lg:flex-row">
          <div className="clientLnadingStoreHolder w-full lg:w-[50%] p-4">
            <div className="px-2 py-2 bg-white w-full h-auto rounded-2xl mb-6 shadow-xl border border-slate-200">
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <div className="">
                  <div className="storeLogo w-16 h-16 rounded-md">
                    <Image
                      width={100}
                      height={100}
                      className="storeLogo w-16 h-16 rounded-md"
                      src={selectedStore?.storeImageUrl}
                    />
                  </div>
                  <div>
                    <h1 className="text-black 2xl:text-lg xl:text-lg lg:text-[16px]  md:text-[16px] sm:text-[14px] max-sm:text-[14px] font-bold">
                      {selectedStore?.businessName}
                    </h1>
                    <p className="text-slate-500 text-[12px] ">
                      {selectedStore?.address}
                    </p>

                    <div className=" flex mt-[7px] items-center gap-[8px] ">
                      <Rating
                        name="disabled"
                        value={selectedStore?.averageRating}
                        precision={0.5}
                        disabled
                        icon={<StarIcon style={{ fontSize: "14px" }} />}
                        emptyIcon={<StarIcon style={{ fontSize: "14px" }} />}
                      />

                      <p className="text-slate-500 font-normal text-[14px]">
                        {selectedStore?.totalReview}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <p className="text-gray-500 text-[12px] ">
                  {selectedStore?.distance.toFixed(1)} KM from your location
                </p> */}
              </div>
              <div className=" w-[100%] h-[0.8px] bg-slate-400 "></div>

              {/*end of header 0000----->*/}
              {/* time set modals ---> */}
              {showStartModal && (
                <div className="startDateEndDateModalMainHolder">
                  <div className="flex flex-col justify-between gap-[20px] p-[10px] bg-white w-[80%] relative z-30 rounded-2xl shadow-2xl">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        value={value}
                        onChange={handleDateChange}
                        format="D/M, ddd, h:mm A"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[30px] text-xs sm:text-sm"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>

                    <div className="flex justify-between bg-white p-4">
                      <button
                        className="w-[150px] h-[45px] bg-red-300 rounded-2xl cursor-pointer"
                        onClick={() => setShowStartModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="w-[150px] h-[45px] bg-black text-white rounded-2xl cursor-pointer"
                        onClick={handleSetStartTime}
                      >
                        Set Start Time
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* start modal */}

              {showEndModal && (
                <div className="startDateEndDateModalMainHolder">
                  <div className="flex flex-col justify-between gap-[20px] p-[10px] bg-white w-[80%] relative z-30 rounded-2xl shadow-2xl">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        value={value}
                        onChange={handleDateChange}
                        format="D/M, ddd, h:mm A"
                        className="w-full  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[30px] text-xs sm:text-sm"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>

                    <div className="flex justify-between bg-white p-4">
                      <button
                        className="w-[150px] h-[45px] bg-red-300 rounded-2xl cursor-pointer"
                        onClick={() => setShowEndModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="w-[150px] h-[45px] bg-black text-white rounded-2xl cursor-pointer"
                        onClick={handleEndTime}
                      >
                        Set End Time
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* end modal */}

              {/* -------------- */}

              {/* payment modal */}
              {paymentOptionModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
                  <div className="relative bg-white rounded-lg p-4 max-w-screen-sm w-full h-auto max-h-[90vh] overflow-auto">
                    <Elements
                      stripe={stripePromise}
                      options={{
                        mode: "payment",
                        amount: convertToSubcurrency(totalpay),
                        currency: "usd",
                      }}
                    >
                      <CheckoutPage amount={totalpay} />
                    </Elements>
                  </div>
                </div>
              )}
              <div className="">
                <div className=" mt-3 flex w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex justify-center items-center gap-[4px] ">
                    <div className="text-[18px] font-bold mb-[7px] ">
                      <BsFillLuggageFill />
                    </div>
                    <h1 className="text-[#1C1C28] font-semibold">
                      Number of bags/luggages
                    </h1>
                  </div>
                  <div className="  w-[90px]  px-[2px] flex justify-between items-center ">
                    <div
                      onClick={dec}
                      className=" p-[4px] flex justify-center items-center cursor-pointer text-white text-3xl font-bold bg-black w-[25px] h-[25px] rounded-full "
                    >
                      <p className="mb-[8px]  ">-</p>
                    </div>

                    <p className="ml-[10px] mr-[10px] text-[18px] font-extrabold  ">
                      {lugNumber}
                    </p>

                    <div
                      onClick={inc}
                      className=" p-[4px] flex justify-center items-center cursor-pointer text-white text-2xl font-bold bg-black w-[25px] h-[25px] rounded-full "
                    >
                      <p className="mb-[6px] ">+</p>
                    </div>
                  </div>
                  {/* end of number of luggage section */}
                </div>
              </div>
              <div className=" mt-5 w-[100%] h-[1.0px] bg-slate-400 "></div>

              {/*end of  quentity counter--- */}

              <div className="   mt-4">
                <div className="">
                  <div className="  flex w-[100%] justify-between items-center p-[3px]  ">
                    <div className="flex flex-col md:flex-row md:justify-center items-center gap-[4px] p-[4px]">
                      <div className="text-[16px]">
                        <GoClockFill />
                      </div>
                      <div className="flex flex-col md:flex-row justify-between items-center gap-[4px] p-[4px]">
                        <div
                          className="flex items-center gap-[3px] p-[4px] cursor-pointer hover:bg-slate-200 hover:rounded-[8px]"
                          onClick={() => setShowStartModal(true)}
                        >
                          <div className="flex items-center">
                            <p className="startTimeEndText">{startDay}</p>
                            <p className="startTimeEndText">/</p>
                            <p className="startTimeEndText">{startMonth},</p>
                          </div>
                          <div className="flex items-center gap-[3px]">
                            <p className="startTimeEndText">{startDayWord},</p>
                            <p className="startTimeEndText">{startTime}</p>
                          </div>
                        </div>

                        <h1 className="text-[18px] md:ml-[6px] md:mr-[6px] text-4xl font-bold mb-[6px]">
                          -
                        </h1>

                        <div
                          onClick={() => setShowEndModal(true)}
                          className="flex items-center gap-[3px] p-[4px] cursor-pointer hover:bg-slate-200 hover:rounded-[8px]"
                        >
                          <div className="flex items-center">
                            <p className="startTimeEndText">{endDay}</p>
                            <p className="startTimeEndText">/</p>
                            <p className="startTimeEndText">{endMonth},</p>
                          </div>
                          <div className="flex items-center gap-[3px]">
                            <p className="startTimeEndText">{endDayWord}</p>
                            <p className="startTimeEndText">{endTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        onClick={() => setShowStartModal(true)}
                        className="text-[#1C1C28] startTimeEndText font-semibold "
                      >
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-[20px] w-[100%] h-[0.8px] bg-slate-400 "></div>

                {/* end of date ---> */}

                <div className=" w-[100%] justify-between items-center p-[3px]  ">
                  <div className="flex w-[100%] justify-between items-center   ">
                    <div className="flex justify-center items-center gap-[10px] ">
                      <div className="text-[14px]  ">
                        <Image src={vect2} alt="icon" />
                      </div>
                      <h1 className="text-[#7F7F7F] font-semibold ">
                        Add promo code
                      </h1>
                    </div>
                    {/* end of top ---> */}
                    <div className="text-black text-[12px] "></div>
                  </div>
                  <div className="   w-full  mt-[5px] ">
                    <div className="flex justify-between items-center">
                      <p>
                        {selectedStore?.currencySymbol}
                        <span>{selectedStore?.price.toFixed(2)}</span> per bag,
                        per day
                      </p>
                      <p>
                        {selectedStore?.currencySymbol}
                        <span>{s_total.toFixed(2)}</span>
                      </p>
                    </div>

                    {/* end --- */}
                    <div className=" mt-[4px] flex justify-between items-center">
                      <p>Fees & taxes </p>
                      <p>
                        {selectedStore?.currencySymbol}
                        <span> {selectedStore?.tax} </span>
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-[#000000] font-bold ">Total</p>
                      <p className="text-[#000000] font-bold mr-[2px] ">
                        {selectedStore?.currencySymbol}
                        <span className="text-[#000000] font-bold ml-[3px] ">
                          {totalpay.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* end of bottom ---> */}
                </div>

                <div className="mt-[10px] w-[100%] h-[0.8px] bg-slate-400 "></div>

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
                      You accept luggagekeepers
                      <span className="text-[#1C1C28] font-bold ">
                        Terms of Service
                      </span>
                      and
                      <span className="text-[#1C1C28] font-bold ">
                        Privacy Policy
                      </span>{" "}
                      by making a payment through Apple Pay or any other payment
                      methods.
                    </p>
                  </div>
                  <div className="text-black text-[12px] "></div>
                </div>
                <div className=" mt-[20px] w-[100%] h-[1.0px] bg-slate-400 "></div>

                <div className=" mt-[30px]  w-full flex justify-center">
                  <button
                    className=" flex justify-center items-center gap-[10px] w-[200px]  text-[#F4F4F4] py-[6px] bg-black  font-normal rounded-[12px] "
                    // onClick={submitPayNowButton}
                    onClick={clickedOpenModal}
                  >
                    <h1 className="mb-[4px] gap-[4px] ">
                      <span className="mr-[4px] "> Pay Now </span>
                      <span className=" mr-[3px] ">
                        {selectedStore?.currencySymbol}
                      </span>
                      {finalPayment}
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="clientLnadingMapHolder w-full lg:w-[50%] h-[300px] lg:h-full p-4">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={coords.lat && coords.lng ? coords : { lat: 0, lng: 0 }}
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
                    lat: selectedStore.mapLat,
                    lng: selectedStore.mapLan,
                  }}
                  icon={{
                    url: "/location.svg",
                    scaledSize: { width: 45, height: 45 },
                  }}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
        {/* end ---> */}
        <Footer/>
      </section>
    </PrivateRoute>
  );
};

export default Clientlandingtwo;
