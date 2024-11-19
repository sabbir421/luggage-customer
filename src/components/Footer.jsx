/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import appleIcon from "../images/file.png";
import playStoreIcon from "../images/playStoreIcon.png";

const Footer = () => {
  const appStore = () => {
    const url = "https://apps.apple.com/us/app/doorap/id6444723041";
    window.open(url, "_blank");
  };

  const playStore = () => {
    const url = "https://play.google.com/store/apps/details?id=com.app.doorAp";
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      {/* Main container */}
      <div className="container mx-auto px-8 lg:px-16">
        {/* Flex container for three sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo & App Store Buttons Section */}
          <div className="space-y-4">
            <h5 className="text-3xl font-extrabold text-white">DOORAP</h5>
            <div className="flex flex-col gap-4">
              <button
                onClick={appStore}
                className="flex items-center gap-3 bg-gray-800 text-white rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
              >
                <Image src={appleIcon} alt="Apple Icon" className="w-6 h-6" />
                <div>
                  <span className="block text-xs">Download on the</span>
                  <span className="font-semibold text-sm">App Store</span>
                </div>
              </button>
              <button
                onClick={playStore}
                className="flex items-center gap-3 bg-gray-800 text-white rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
              >
                <Image
                  src={playStoreIcon}
                  alt="Play Store Icon"
                  className="w-6 h-6"
                />
                <div>
                  <span className="block text-xs">Get it on</span>
                  <span className="font-semibold text-sm">Play Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Policy Links Section */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold text-white">Policy</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="hover:text-white transition-all duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-all duration-300"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold text-white">Follow Us</h5>
            <ul className="flex space-x-6 text-2xl">
              <li>
                <a
                  href="https://www.instagram.com/doorap.uk?igsh=MWZjNGFza2Q0b25hdw=="
                  target="_blank"
                  className="hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61556335572862&mibextid=ZbWKwL"
                  target="_blank"
                  className="hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/doorapltd/"
                  target="_blank"
                  className="hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          <span>© 2024 </span>
          <a
            href="https://doorap.com"
            className="font-semibold text-gray-300 hover:text-white transition-colors duration-300"
          >
            doorap.com
          </a>
          <span> | All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
