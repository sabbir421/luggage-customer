/** @format */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bannarImage from "../images/authenticate.png";
import appleLogo from "../images/Apple.svg";
import googleLogo from "../images/Google.svg";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, TextField } from "@mui/material";
import { appleProvider, auth, googleProvider } from "../utils/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../store/userSlice/userSlice";
import { useRouter } from "next/router";

const Login = () => {
  const [phone, setPhone] = useState("+33");
  const [isUserLogin, setIsUserLogin] = useState(null);
  const [numCode, setNumCode] = useState("");
  const [error, setError] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");
  const [regType, setRegType] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginSuccess } = useSelector((store) => store.userData);

  const handlePhoneChange = (value, countryData) => {
    setPhone(`+${value}`);
    setNumCode(`+${countryData.dialCode}`);
  };

  const sendOtp = async () => {
    if (error) setError(null); // Clear previous errors
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha resolved..");
        },
      }
    );

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifier
      );
      setConfirmationResult(confirmation);
    } catch (error) {
      if (error.code === "auth/too-many-requests") {
        setError("Too many requests. Please try again later.");
      } else {
        setError(error.message);
      }
      console.log("Error:", error);
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) return;

    try {
      setRegType("mobile");
      const result = await confirmationResult.confirm(otp);
      setIsUserLogin(result.user);
    } catch (error) {
      setError("Invalid OTP. Please try again.");
      console.log("Error:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setRegType("google");
      const result = await signInWithPopup(auth, googleProvider);
      setIsUserLogin(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const signInWithApple = async () => {
    try {
      setRegType("apple");
      const result = await signInWithPopup(auth, appleProvider);
      setIsUserLogin(result.user);
    } catch (error) {
      console.error("Apple Sign-In Error:", error);
    }
  };

  useEffect(() => {
    const data = {
      name: isUserLogin?.displayName,
      email: isUserLogin?.email,
      firebaseToken: isUserLogin?.accessToken,
      loginId: isUserLogin?.uid,
      regType,
      otp: "",
      mobile: phone,
      countryCode: numCode ? numCode : "",
      appleIdentity: "",
      address: "",
    };
    dispatch(fetchUserData(data));

    if (loginSuccess === true) {
      router.push("/clientslandingone");
    }
  }, [isUserLogin, loginSuccess]);

  return (
    <section className="w-full h-screen flex flex-col lg:flex-row">
      {/* Slider */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full">
        <Image
          src={bannarImage}
          alt="Banner"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-full p-6">
        <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <div className="flex justify-center items-center  p-4 rounded-lg mb-4 ">
            <h1
              className="text-4xl font-bold  tracking-wider  uppercase"
              style={{ textAlign: "center" }}
            >
              <span className="text-yellow-300">L</span>uggage
              <span className="text-green-300">K</span>eepers
            </h1>
          </div>

          {/* OTP or Phone Input */}
          {confirmationResult ? (
            <div className="flex flex-col items-center w-full">
              <TextField
                label="Enter OTP"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
              />
              <Button
                onClick={verifyOtp}
                variant="contained"
                color="primary"
                className="w-full mt-4"
              >
                Verify OTP
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <PhoneInput
                value={phone}
                onChange={handlePhoneChange}
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%" }}
              />
              <Button
                onClick={sendOtp}
                variant="contained"
                style={{ backgroundColor: "#f27804", marginTop: "20px" }}
                className="w-full mt-4"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Google & Apple Sign-In */}
          <div className="flex justify-around mt-6 w-full">
            <Button
              onClick={signInWithGoogle}
              variant="outlined"
              className="w-1/3"
              startIcon={
                <Image src={googleLogo} alt="Google" width={20} height={20} />
              }
            >
              Google
            </Button>
            <span>OR</span>
            <Button
              onClick={signInWithApple}
              variant="outlined"
              className="w-1/3"
              startIcon={
                <Image src={appleLogo} alt="Apple" width={20} height={20} />
              }
            >
              Apple
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
