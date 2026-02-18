import localFont from "next/font/local";

export const afacadMedium = localFont({
  src: [
    { path: "../../../fonts/sustain/afacad-medium.ttf", weight: "500" },
  ],
  variable: "--font-afacad-medium",
  display: "swap",
});

export const afacadBold = localFont({
  src: [
    { path: "../../../fonts/sustain/afacad-bold.ttf", weight: "700" },
  ],
  variable: "--font-afacad-bold",
  display: "swap",
});

export const vintageRough = localFont({
  src: [
    { path: "../../../fonts/sustain/vintagerough-demoversion-regular.otf", weight: "400" },
  ],
  variable: "--font-vintage-rough",
  display: "swap",
});
