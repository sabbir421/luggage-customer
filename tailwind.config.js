/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(to right, #3E3C41, #FEF6D9)",
        "custom-gradientOne": "linear-gradient(to right, #DCEFF0, #524F4D)",
        "custom-gradientwo": "linear-gradient(to right, #3B3D35, #DDD9D7)",
        "custom-gradienthree": "linear-gradient(to right, #999999, #000000)",
        "custom-gradientFour": "linear-gradient(to bottom, #23222E, #D3E0E4)",
        // -------#
        homeLondonBg: "url('/img/bg_london.png')",
        homeWorkBgOne: "url('/img/homeWorkBgOne.svg')",
        hkBgTwo: "url('/img/hkBgTwo.svg')",
        hkBgThree: "url('/img/hkBgThree.svg')",
        blockBg1: "url('/img/hbkAp.png')",
        blockBg2: "url('/img/hbKphone.png')",
        blockBg3: "url('/img/hbkphone2.png')",
      },
    },
  },
  plugins: [],
};
