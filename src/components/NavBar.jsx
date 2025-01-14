/** @format */

"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import navLogo from "../images/textLogo.png";
import appleIcon from "../images/file.png";
import playStoreIcon from "../images/playStoreIcon.png";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { clearStoreData } from "../store/storeSlice/storeSlice";
import { clearBookingData } from "../store/bookingSlice.js/bookingSlice";
import { signOut } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebaseConfig";
import { logoutUser } from "../store/userSlice/userSlice";
const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverBoxRef = useRef(null);
  const { token } = useSelector((state) => state.userData);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHistory = () => {
    router.push({
      pathname: "/orderHistory",
    });
  };
  const becomePartner = () => {
    const url = "https://partner.doorap.com/";
    window.open(url, "_blank");
  };

  const appStore = () => {
    const url = "https://apps.apple.com/us/app/doorap/id6444723041";
    window.open(url, "_blank");

    setIsHovered(false);
  };
  const playStore = () => {
    const url = "https://play.google.com/store/apps/details?id=com.app.doorAp";
    window.open(url, "_blank");

    setIsHovered(false);
  };

  const toggleHoverBox = () => {
    setIsHovered((prev) => !prev);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOutside = (event) => {
    if (hoverBoxRef.current && !hoverBoxRef.current.contains(event.target)) {
      setIsHovered(false);
    }
  };

  const handleDownloadClick = (url) => {
    window.open(url, "_blank");
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogIn = () => {
    router.push({
      pathname: "/login",
    });
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
    <nav className="mb-[10px] flex flex-wrap items-center justify-between p-2">
<div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-white tracking-wider drop-shadow-lg uppercase">
    <span className="text-yellow-300">L</span>uggage 
    <span className="text-green-300">K</span>eepers
  </h1>
</div>

      <div className="flex flex-wrap justify-center items-center gap-3 relative">
        {/* <button
          onClick={becomePartner}
          className="text-[#373333] hover:bg-yellow-50 hover:rounded-lg font-normal p-2 bg-transparent border-none cursor-pointer"
        >
          Become a Partner
        </button> */}
        <div className="relative">
          {/* <h1
            className="text-[#373333] font-normal cursor-pointer"
            onClick={toggleHoverBox}
          >
            Download Doorap
          </h1> */}
          {isHovered && (
            <div
              ref={hoverBoxRef}
              className="absolute top-full left-0 mt-2 gap-3 bg-white border border-gray-300 shadow-lg p-4 z-10"
            >
              <button
                onClick={appStore}
                className="p-1 bg-[#f1f1f1] mb-[8px] flex items-center justify-start gap-[4px] border-[1px] border-slate-600 rounded-2xl w-[120px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[35px] sm:h-[30px] md:h-[35px] lg:h-[40px] cursor-pointer"
              >
                <div className="flex items-center h-[20px] w-[20px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px]">
                  <Image
                    src={appleIcon}
                    alt="icon"
                    className="text-white mb-[3px]"
                  />
                </div>
                <div className="flex flex-col justify-between p-[2px]">
                  <h3 className="text-[#373333] text-[8px] sm:text-[6px] md:text-[8px] lg:text-[10px] -mb-[2px]">
                    Download on the
                  </h3>
                  <h3 className="text-[#373333] text-[8px] sm:text-[6px] md:text-[8px] lg:text-[10px] -mt-[3px]">
                    App Store
                  </h3>
                </div>
              </button>
              {/* end ---> ios */}
              <button
                onClick={playStore}
                className="p-1 bg-[#f1f1f1] flex items-center justify-center gap-[4px] border-[1px] border-slate-600 rounded-2xl w-[120px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[35px] sm:h-[30px] md:h-[35px] lg:h-[40px] cursor-pointer"
              >
                <div className="flex justify-center items-center h-[20px] w-[20px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] mr-[4px]">
                  <Image
                    src={playStoreIcon}
                    alt="icon"
                    className="text-white mb-[3px]"
                  />
                </div>
                <div className="flex flex-col justify-between p-[2px]">
                  <h3 className="text-[#373333] text-[8px] sm:text-[6px] md:text-[8px] lg:text-[10px] -mb-[2px]">
                    Get It On
                  </h3>
                  <h3 className="text-[#373333] text-[8px] sm:text-[6px] md:text-[8px] lg:text-[10px] -mt-[3px]">
                    Play Store
                  </h3>
                </div>
              </button>
              {/* end androis---> */}
            </div>
          )}
        </div>
        <div>
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
            {token ? (
              <>
                <MenuItem onClick={handleHistory}>History</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleLogIn}>Log in</MenuItem>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
