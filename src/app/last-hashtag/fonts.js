import localFont from "next/font/local";

export const galindoRegular = localFont({
  src: [{ path: "../../../fonts/lasttag/galindo-regular.ttf", weight: "400" }],
  variable: "--font-galindo-regular",
  display: "swap",
});

export const interMedium = localFont({
  src: [
    { path: "../../../fonts/lasttag/inter_18pt-medium.ttf", weight: "500" },
  ],
  variable: "--font-inter-medium",
  display: "swap",
});

export const interSemiBold = localFont({
  src: [
    { path: "../../../fonts/lasttag/inter_18pt-semiBold.ttf", weight: "600" },
  ],
  variable: "--font-inter-semibold",
  display: "swap",
});
