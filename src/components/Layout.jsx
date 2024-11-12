/** @format */

import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
// import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Doorap",
  description:
    "Securely store your bags and luggage at our verified storage spots across United Kingdom & France",
};

export default function RootLayout({ children }) {
  return (
    <div className={dm.className}>
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}
