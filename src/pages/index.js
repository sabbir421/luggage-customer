/** @format */
"use client";
import Hero from "@/components/Hero";
import rightArrow from "../images/ArrowRight.png";
import rightArrowBlack from "../images/ArrowRight.svg";
import appleIcon from "../images/file.png";
import playStoreIcon from "../images/playStoreIcon.png";
import homePageImg from "../images/homepageImg1.png";
import Image from "next/image";
import RootLayout from "../components/Layout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import NavBar from "@/components/NavBar";

export default function Home() {
  const router = useRouter();
  const { token, loginUser } = useSelector((state) => state.userData);
  const handleBookingButton = () => {
    if (token) {
      router.push({
        pathname: "/clientslandingone",
      });
    } else {
      router.push({
        pathname: "/login",
      });
    }
  };

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col justify-between pl-4 pr-4">
        <Hero />

        <section className=" mt-[70px] mb-5 flex justify-center gap-5 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col">
          <div className="p-6 flex flex-col justify-between items-stretch 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] max-sm:w-[100%] h-[380px] rounded-xl bg-custom-gradient">
            <div className="flex flex-col justify-between items-stretch">
              <h3 className="text-yellow-50  font-normal text-[28px]">
                Become a luggage storage
              </h3>
              <h3 className="text-yellow-50 font-normal text-[28px]">
                Partner & smart earning
              </h3>
            </div>
            <a
              href="https://partner.doorap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 flex items-center justify-start gap-2 border border-x-white rounded-lg w-[190px] h-[35px] cursor-pointer"
            >
              <h3 className="text-yellow-50 ">Become a Partner</h3>{" "}
              <div>
                <Image
                  src={rightArrow}
                  alt="image"
                  className="h-[25px] w-[25px]"
                />
              </div>
            </a>
          </div>
          <Image
            className="bg-homeLondonBg  bg-no-repeat bg-cover 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] max-sm:w-[100%] h-[380px] overflow-hidden rounded-xl"
            src={homePageImg}
          />
        </section>
        {/* end----> */}
        <section className="  mt-[30px] flex justify-center gap-2 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col ">
          <div className=" p-2  flex-col justify-between items-stretch 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] max-sm:w-[100%] h-[150px] rounded-xl  ">
            <h3 className="text-[#373333] text-xl font-medium">
              Easily earn upwards £1000+ extra{" "}
            </h3>
            <h3 className="text-[#373333] text-xl font-medium">
              at your store by a few simple clicks.
            </h3>
            <p className="  mt-[15px] text-[#373333] text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px] ">
              Don't miss out on this profitable opportunity to enhance your
              business and cater to the needs of tourists in some of the world's
              most visited cities.
            </p>
          </div>
          {/* end ---> */}
          <div className="flex flex-col justify-between items-stretch w-full 2xl:w-[50%] xl:w-[50%] lg:w-[50%] h-[150px] rounded-xl">
            <div className="p-1 flex flex-col items-stretch w-full h-[200px] rounded-xl">
              <p className="mt-[15px] text-[#373333] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px]">
                Join Doorap as a partner for luggage storage and tap into the
                lucrative market of bustling tourist hubs like Paris and London.
              </p>
              <p className="mt-[15px] w-full text-[#373333] text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px] ">
                By partnering with Doorap, you'll not only boost your revenue
                but also attract a steady stream of customers seeking secure and
                convenient hassle-free luggage storage solutions in prime
                locations.
              </p>
            </div>
          </div>
          {/* end ----> */}
        </section>
        {/* end of ---- */}
        <section className="  py-4 mt-[40px] flex flex-col  ">
          <div className="flex gap-2  items-center ">
            <h1 className="text-[#373333] text-[20px] font-medium ">
              How does it work{" "}
            </h1>
            <div>
              <Image
                src={rightArrowBlack}
                alt="image"
                className="h-[20px] w-[20px] font-extrabold"
              />
            </div>
          </div>

          <div className=" py-2 mt-[10px] grid justify-items-center gap-3 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3">
            <div className=" flex-col w-full h-[350px] rounded-xl">
              <div className="mb-[5px] bg-homeWorkBgOne bg-cover bg-no-repeat h-[90%] rounded-xl "></div>
              <p className=" mt-[4px] text-[12px] text-[#373333]   ">
                Choose your store & book in a few clicks
              </p>
            </div>
            {/* end ---> */}

            <div className="  flex-col w-full h-[350px] rounded-xl">
              <div className=" bg-hkBgTwo  bg-no-repeat bg-cover w-full h-[90%] rounded-xl "></div>
              <p className=" mt-[4px] text-[12px] text-[#373333]   ">
                Drop your bags & luggages off
              </p>
            </div>
            {/* end ---> */}
            <div className="  flex-col w-full h-[350px] rounded-xl">
              <div className=" bg-hkBgThree  bg-no-repeat bg-cover w-full h-[90%] rounded-xl "></div>
              <p className=" mt-[4px] text-[12px] text-[#373333]   ">
                Spend the day exploring and enjoy
              </p>
            </div>
            {/* end ---> */}
          </div>
        </section>
        {/* end of---> */}
        <section className=" mt-[30px] flex justify-between gap-2 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col ">
          <div className=" flex justify-between w-[100%]  2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col ">
            <div className="   flex gap-1 items-center justify-start">
              <h1 className="text-[#373333] text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                Why download Doorap on App & Play Store
              </h1>
              <div>
                <Image
                  src={rightArrowBlack}
                  alt="image"
                  className="h-[20px] w-[20px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] font-extrabold"
                />
              </div>
            </div>
            <div className="flex 2xl:mt-0 xl:mt-0 lg:mt-0  md:mt-[20px] sm:mt-[20px] max-sm:mt-[20px] md:justify-around sm:justify-between max-sm:justify-between gap-[5px]">
              <a
                href="https://apps.apple.com/us/app/doorap/id6444723041"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-[#f1f1f1] flex items-center justify-start gap-[4px] border-[1px] border-slate-600 rounded-2xl w-[120px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[35px] sm:h-[30px] md:h-[35px] lg:h-[40px] cursor-pointer"
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
              </a>
              {/*  */}
              <a
                href="https://play.google.com/store/apps/details?id=com.app.doorAp"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>
        </section>

        <section className="  mt-[20px] gap-[10px]  w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 ">
          <div className="bg-custom-gradientOne  flex-col justify-center items-center p-4 h-[200px] rounded-xl 2xl:w-[100%] ">
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              Add images of your
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              bags for easier
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              recognition at the store.
            </h1>
          </div>
          <div className="bg-custom-gradientwo   flex-col justify-center items-center p-4 h-[200px] rounded-xl 2xl:w-[100%] ">
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              Get directions to{" "}
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              store & more offers.
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[32px] sm:text-[30px] max-sm:text-[30px] ">
              for your next booking
            </h1>
          </div>
          <div className="bg-custom-gradienthree  flex-col justify-center items-center p-4 h-[200px] rounded-xl 2xl:w-[100%] ">
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              Easily view or{" "}
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              update your
            </h1>
            <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[30px] max-sm:text-[30px] ">
              booking details.
            </h1>
          </div>
        </section>
        {/* end ---> */}
        <section className="  mt-[20px]  p-[4px] bg-custom-gradientFour w-full 2xl:h-[220px] xl:h-[220px] lg:h-[220px] md:h-[230px]  rounded-xl ">
          <div className=" 2xl:ml-[20px] xl:ml-[20px] lg:ml-[20px]   text-yellow-50 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] max-sm:text-[20px] ">
            Affordable, secured & safe <br></br>
            luggage storage
          </div>
          <div className="   p-[2px]  mt-[20px] 2xl:flex xl:flex lg:flex md:flex-row sm:flex-row max-sm:flex-row justify-between items-center  w-full">
            <div className="  2xl:ml-[20px] xl:ml-[20px] lg:ml-[20px]  py-[5px] md:w-[50%] sm:w-[100%] max-sm:w-[100%]  ">
              <div className="flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-between sm:justify-between max-sm:justify-between gap-3 ">
                <div className=" px-[5px] flex justify-center items-center text-[#FFFFFF]  border-[1px] border-white rounded-[10px] ">
                  Free Collections
                </div>
                <div className=" px-[5px] flex justify-center items-center text-[#FFFFFF]  border-[1px] border-white rounded-[10px] ">
                  24/7 Customer Support
                </div>
              </div>
              <p className="p-2 mt-[5px] text-[#FFFFFF]  ">
                Prices from £3 per bag per day in the UK
              </p>
            </div>

            <div className=" mr-[5px] 2xl:mt-[10px] xl:mt-[10px] lg:mt-[10px] md:mt-[0px] sm:mt-[10px] max-sm:mt-[10px]  flex md:justify-end sm:justify-end max-sm:justify-end">
              <Button
                onClick={handleBookingButton}
                style={{ color: "white", border: "1px solid white" }}
              >
                BOOK NOW
                <div>
                  <Image
                    src={rightArrow}
                    alt="image"
                    className="h-[25px] w-[25px]"
                  />
                </div>
              </Button>
            </div>
          </div>
        </section>
        {/* end ---> */}

        <section className="  py-4 mt-[40px] flex flex-col  ">
          <div className="flex gap-2  items-center ">
            <h1 className="text-[#373333] text-[20px] font-medium ">Blog</h1>
            <div>
              <Image
                src={rightArrowBlack}
                alt="image"
                className="h-[20px] w-[20px] font-extrabold"
              />
            </div>
          </div>

          <div className=" py-2 mt-[10px] grid justify-items-center gap-5 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3">
            <div className=" flex-col w-full h-[360px] rounded-xl">
              <div className="mb-[5px] bg-blockBg1 bg-cover bg-no-repeat h-[85%] rounded-xl "></div>
              <div className="  ">
                <div className="flex items-center gap-[5px] mt-[3px] ">
                  <div className="">
                    <p className="  text-[12px] text-[#373333]   ">2024</p>
                    <p className="  text-[12px] text-[#373333]   ">Nov</p>
                  </div>
                  <div>
                    <h1 className="text-[25px] text-black font-bold">25</h1>
                  </div>
                </div>
                <p className=" mt-[6px] text-[15px] text-[#373333]   ">
                  Best places to explore in London
                </p>
              </div>
            </div>
            {/* end ---> */}

            <div className="  flex-col w-full h-[360px] rounded-xl">
              <div className=" bg-blockBg2  bg-no-repeat bg-cover w-full h-[85%] rounded-xl "></div>
              <div className=" ">
                <div className="flex items-center gap-[5px] mt-[3px] ">
                  <div className="">
                    <p className="  text-[12px] text-[#373333]   ">2024</p>
                    <p className="  text-[12px] text-[#373333]   ">Nov</p>
                  </div>
                  <div>
                    <h1 className="text-[25px] text-black font-bold">25</h1>
                  </div>
                </div>
                <p className=" mt-[6px] text-[15px] text-[#373333]   ">
                  Best places to visit in Paris
                </p>
              </div>
            </div>
            {/* end ---> */}
            <div className="  flex-col w-full h-[360px] rounded-xl">
              <div className=" bg-blockBg3  bg-no-repeat bg-cover w-full h-[85%] rounded-xl "></div>
              <div className=" ">
                <div className="flex items-center gap-[5px] mt-[3px] ">
                  <div className="">
                    <p className="  text-[12px] text-[#373333]   ">2024</p>
                    <p className="  text-[12px] text-[#373333]   ">Nov</p>
                  </div>
                  <div>
                    <h1 className="text-[25px] text-black font-bold">25</h1>
                  </div>
                </div>
                <p className=" mt-[6px] text-[15px] text-[#373333]   ">
                  Doorap Updates
                </p>
              </div>
            </div>
            {/* end ---> */}
          </div>
        </section>
        {/* end ----> */}
        <section className="mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-6 flex flex-col items-center ">
          <div className="w-full  p-3 sm:p-5 md:p-6 lg:p-8 xl:p-8">
            <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[45px] text-center">
              SIGN UP FOR UPDATES & OFFERS
            </h1>
          </div>
          <div className="w-full flex justify-center mt-[2px] sm:mt-[2px] md:mt-[2px] lg:mt-[2px] xl:mt-[2px]  p-4">
            <a
              href="https://partner.doorap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 rounded-[25px] sm:rounded-[25px] md:rounded-[25px] max-sm:w-[100%]  sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[55%] h-10 sm:h-10 md:h-10 lg:h-10 xl:h-10 cursor-pointer   hover:bg-yellow-50"
            >
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                ENTER YOUR EMAIL FOR 10% OFF
              </h3>
            </a>
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
