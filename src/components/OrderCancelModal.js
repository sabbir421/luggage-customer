import {
  cancelOrder,
  getActiveOrder,
} from "@/store/bookingSlice.js/bookingSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderCancelModal = ({ order, onClose }) => {
  console.log("---------------", order);
  const { token, loginUser } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const submitRefund = async () => {
    await dispatch(
      cancelOrder({
        token,
        data: { vendorId: order?.providerId, bookingId: order?.id },
      })
    );
    await dispatch(getActiveOrder({ token, customerId: loginUser?.id }));
    await onClose(); // Close modal after cancellation logic
  };

  return (
    <div className="fixed inset-0 z-10 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 ml-4">
            Cancel Booking
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Are you sure you want to cancel this booking? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={submitRefund}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
