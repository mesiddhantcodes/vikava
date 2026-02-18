import localFont from "next/font/local";

// Aileron Regular (400)
export const aileronRegular = localFont({
  src: [
    { path: "../../../fonts/sourcingcartel/aileron-regular.otf", weight: "400" },
  ],
  variable: "--font-aileron-regular",
  display: "swap",
});

// Aileron Bold (700)
export const aileronBold = localFont({
  src: [
    { path: "../../../fonts/sourcingcartel/aileron-bold.otf", weight: "700" },
  ],
  variable: "--font-aileron-bold",
  display: "swap",
});

// Alumnisans Bold (700)
export const alumnisansBold = localFont({
  src: [
    { path: "../../../fonts/sourcingcartel/alumnisans-bold.ttf", weight: "700" },
  ],
  variable: "--font-alumnisans-bold",
  display: "swap",
});

// Bespoke Stencil Medium (500)
export const bespokestencilMedium = localFont({
  src: [
    { path: "../../../fonts/sourcingcartel/bespokestencil-medium.otf", weight: "500" },
  ],
  variable: "--font-bespokestencil-medium",
  display: "swap",
});
