import localFont from "next/font/local";

export const monasans = localFont({
  src: [
    {
      path: "../../../fonts/design-library-of-india/monasans-regular.ttf",
      weight: "400",
    },
    {
      path: "../../../fonts/design-library-of-india/monasans-medium.ttf",
      weight: "500",
    },
    {
      path: "../../../fonts/design-library-of-india/monasans-semibold.ttf",
      weight: "600",
    },
    { path: "../../../fonts/design-library-of-india/monasans-bold.ttf", weight: "700" },
  ],
  variable: "--font-monasans",
  display: "swap",
});
