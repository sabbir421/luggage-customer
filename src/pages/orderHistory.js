import {
  clickedOrder,
  getActiveOrder,
} from "../store/bookingSlice.js/bookingSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMapMarkerAlt, FaTimes, FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/router";
import OrderCancelModal from "../components/OrderCancelModal";
import ClientLandingNav from "../components/ClientLandingNav";
import PrivateRoute from "../components/PrivateRoute";

const BookingHistoryCard = () => {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { token, loginUser } = useSelector((state) => state.userData);
  const { orderList } = useSelector((state) => state.luggageBookingData);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (token && loginUser?.id) {
      dispatch(getActiveOrder({ token, customerId: loginUser?.id }));
    }
  }, [dispatch, token, loginUser?.id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCancelBooking = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true); // Open modal
  };

  const handleTrackOrder = (order) => {
    dispatch(clickedOrder(order));
    router.push("/ordertrackpage");
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  if (!isClient) {
    return null;
  }

  return (
    <PrivateRoute>
      <>
        <ClientLandingNav />
        {!orderList?.length ? (
          <p>Loading bookings...</p>
        ) : (
          orderList.map((order) => (
            <div
              key={order?.id}
              className="border rounded-lg mb-2 shadow-lg p-6 bg-white max-w-lg md:max-w-xl lg:max-w-3xl mx-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-24 h-24 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gray-200 mb-4 md:mb-0 md:mr-6">
                  <FaBriefcase className="text-gray-600 text-4xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {order?.customerName}
                  </h2>
                  <p className="text-gray-500">
                    Booking ID: <span className="font-medium">{order?.id}</span>
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {order?.storeName}
                </h3>
                <p className="text-gray-600">
                  Provider:{" "}
                  <span className="font-medium">{order?.providerName}</span>
                </p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-bold ${
                      order?.status === "Drop-off"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {order?.status}
                  </span>
                </p>
                <p className="text-gray-500 text-sm mt-1">{order?.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Booking Details:
                  </h4>
                  <p>
                    Start: {formatDate(order?.startDate)} at {order?.startTime}
                  </p>
                  <p>
                    End: {formatDate(order?.endDate)} at {order?.endTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">
                    Price:{" "}
                    <span className="font-bold">
                      {order?.currencySymbol}
                      {order?.price}
                    </span>
                  </p>
                  <p>
                    Subtotal: {order?.currencySymbol}
                    {order?.subTotal}
                  </p>
                  <p>
                    Tax: {order?.currencySymbol}
                    {order?.tax}
                  </p>
                  <p className="font-bold text-lg">
                    Payment Status:{" "}
                    <span
                      className={
                        order?.paymentStatus === "SUCCESS"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {order?.paymentStatus}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                Created at: {formatDate(order?.createdAt)}
              </p>

              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleTrackOrder(order)}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Track Your Order
                </button>
                <button
                  onClick={() => handleCancelBooking(order)}
                  className={`${
                    order.status === "Drop-off"
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-gray-300 cursor-not-allowed"
                  } text-white font-bold py-2 px-4 rounded-lg flex items-center`}
                  disabled={order.status !== "Drop-off"} // Disable the button if status is not "Drop-off"
                >
                  <FaTimes className="mr-2" />
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}

        {/* Render Modal */}
        {isModalOpen && (
          <OrderCancelModal order={selectedOrder} onClose={closeModal} />
        )}
      </>
    </PrivateRoute>
  );
};

export default BookingHistoryCard;
