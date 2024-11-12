/** @format */

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import appleIcon from "../images/file.png";
import playStoreIcon from "../images/playStoreIcon.png";
import Image from "next/image";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverBoxRef = useRef(null);
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
  console.log("-------------" > isHovered);

  return (
    <footer className="  py-3 mt-5 flex flex-col     text-surface dark:bg-neutral-700 dark:text-white">
      <div className="   px-6 w-full justify-between grid  gap-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 lg:grid-cols-3">
        <div className="mb-6 flex-col justify-center items-center    ">
          <h5 className="mb-2.5 mr-[86px]  font-bold uppercase">DOORAP</h5>

          <ul className="mb-0  flex-col justify-start  inline-block ">
            <li className="flex   justify-start items-center mb-2  ">
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
            </li>
            <li className="flex   justify-start items-center mb-2  ">
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
            </li>
            <li className="flex justify-start items-center mb-2 ">
              <a href="#!">Reviews</a>
            </li>
            <li className="flex justify-start items-center mb-2 ">
              <a href="#!">Become a partner</a>
            </li>
            <li className="flex justify-start items-center mb-2 ">
              <a href="#!">Blog</a>
            </li>
          </ul>
        </div>

        <div className="mb-6  flex flex-col 2xl:items-center xl:items-center lg:items-center md:items-start sm:items-start max-sm:items-start ">
          <h5 className="mb-2.5 mr-[10px] font-bold uppercase">Policy</h5>

          <ul className="mb-0 flex-col justify-center  inline-block ">
            <li className="flex justify-start items-center mb-2 ">
              <a href="/privacy-policy">Privacy policy</a>
            </li>
            <li className="flex justify-start items-center mb-2 ">
              <a href="terms-conditions">Terms & Conditions</a>
            </li>
            <li className="flex justify-start items-center mb-2 ">
              <a href="/contact">Contact Support</a>
            </li>
          </ul>
        </div>

        <div className="mb-6 flex flex-col 2xl:items-end xl:items-end lg:items-end md:items-end sm:items-start max-sm:items-start ">
          <h5 className="mb-2.5  mr-[8px] font-bold uppercase">FOLLOW US</h5>

          <ul className="mb-0  flex flex-col items-start">
            <li className="flex items-center  mb-1">
              <a
                href="https://www.instagram.com/doorap.uk?igsh=MWZjNGFza2Q0b25hdw=="
                target="blank"
                className="flex items-center"
              >
                <span className="mr-3 h-[14px] w-[14px] text-[#373333]">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                Instagram
              </a>
            </li>

            <li className="flex items-center  mb-1">
              <a
                href="https://www.facebook.com/profile.php?id=61556335572862&mibextid=ZbWKwL"
                target="blank"
                className="flex gap-[6px] items-center"
              >
                <span className="mr-3 h-[10px] w-[10px] text-[#373333]">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                Facebook
              </a>
            </li>

            <li className="flex justify-start items-start  mb-1">
              <a
                href="https://www.linkedin.com/company/doorapltd/"
                target="blank"
                className="flex items-center"
              >
                <span className="mr-3 h-[14px] w-[14px] text-[#373333]">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div className=" flex justify-center p-4 text-center dark:bg-neutral-600">
        <span>© 2024 Copyright:</span>
        <a className="font-semibold text-neutral-600 dark:text-neutral-400">
          doorap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
