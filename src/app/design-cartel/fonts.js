import localFont from "next/font/local";

// Absans Regular
export const absansRegular = localFont({
  src: [
    {
      path: "../../../fonts/designcartel/absans-regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-absans-regular",
  display: "swap",
});

// Karantina Regular
export const karantinaRegular = localFont({
  src: [
    {
      path: "../../../fonts/designcartel/karantina-regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-karantina-regular",
  display: "swap",
});
