/** @format */

"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import axios from "axios"; // Import axios for making API requests
import { FaAlignJustify } from "react-icons/fa6";
// import { setLocation } from "@/store/locationSlice"; // Adjust the import based on your store setup

import navLogo from "../images/textLogo.png";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/userSlice/userSlice";
import { clearStoreData } from "@/store/storeSlice/storeSlice";
import { clearBookingData } from "@/store/bookingSlice.js/bookingSlice";
import { signOut } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebaseConfig";

const ClientLandingNav = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const hoverBoxRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHistory = () => {
    router.push({
      pathname: "/orderHistory",
    });
  };
  const toggleHoverBox = () => {
    setIsHovered((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (hoverBoxRef.current && !hoverBoxRef.current.contains(event.target)) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          query
        )}&key=${apiKey}`;
        const response = await axios.get(url);
        const { predictions } = response.data;

        setSuggestions(predictions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (placeId) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
      const response = await axios.get(url);
      const { result } = response.data;

      if (result.geometry) {
        const { lat, lng } = result.geometry.location;
        // dispatch(setLocation({ lat, lng }))
      }

      setSearchQuery(result.formatted_address || "");
      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };
  const handleLogout = async () => {
    signOut(auth, googleProvider)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
    await dispatch(logoutUser());
    await dispatch(clearStoreData());
    await dispatch(clearBookingData());
  };

  return (
    <nav className="mb-[10px] flex flex-wrap items-center justify-between p-4 overflow-hidden">
      <div className="flex justify-center items-center">
        <Image
          src={navLogo}
          alt="logo"
          className="h-[54px] w-[150px]"
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div className="px-3 w-[100%] flex justify-between items-center gap-3 relative">
       
        <div style={{ marginLeft: "95%",marginTop:"-50px" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <DehazeOutlinedIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleHistory}>History</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default ClientLandingNav;
