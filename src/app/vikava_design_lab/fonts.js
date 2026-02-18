import localFont from "next/font/local";

// Barlow Condensed ExtraBold
export const barlowCondensedExtraBold = localFont({
  src: [
    {
      path: "../../../fonts/vikavalab/barlowcondensed-extrabold.ttf",
      weight: "400",
    },
  ],
  variable: "--font-barlow-condensed-extrabold",
  display: "swap",
});

// Big Shoulders Black
export const bigShouldersBlack = localFont({
  src: [
    {
      path: "../../../fonts/vikavalab/bigshoulders-black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-big-shoulders-black",
  display: "swap",
});

// Poppins Bold
export const poppinsBold = localFont({
  src: [
    {
      path: "../../../fonts/vikavalab/poppins-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins-bold",
  display: "swap",
});

// Poppins Medium
export const poppinsMedium = localFont({
  src: [
    {
      path: "../../../fonts/vikavalab/poppins-medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-poppins-medium",
  display: "swap",
});
