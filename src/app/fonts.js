import localFont from "next/font/local";

export const geistBold = localFont({
  src: [
    { path: "../../fonts/vikava/geist-bold.ttf", weight: "700" },
  ],
  variable: "--font-geist-bold",
  display: "swap",
});

export const geistMedium = localFont({
  src: [
    { path: "../../fonts/vikava/geist-medium.ttf", weight: "500" },
  ],
  variable: "--font-geist-medium",
  display: "swap",
});

export const geistSemiBold = localFont({
  src: [
    { path: "../../fonts/vikava/geist-semibold.ttf", weight: "600" },
  ],
  variable: "--font-geist-semibold",
  display: "swap",
});

export const greatVibesRegular = localFont({
  src: [
    { path: "../../fonts/vikava/greatvibes-regular.ttf", weight: "400" },
  ],
  variable: "--font-greatvibes-regular",
  display: "swap",
});
