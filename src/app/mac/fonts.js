import localFont from "next/font/local";

export const hooskaichamfered = localFont({
  src: [
    {
      path: "../../../fonts/mac/hooskaichamferedsquare.ttf",
      weight: "400",
    },
  ],
  variable: "--font-hooskaichamfered",
  display: "swap",
});

export const spaceGroteskRegular = localFont({
  src: [
    {
      path: "../../../fonts/mac/spacegrotesk-regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-spacegrotesk-regular",
  display: "swap",
});

export const spaceGroteskBold = localFont({
  src: [
    {
      path: "../../../fonts/mac/spacegrotesk-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-spacegrotesk-bold",
  display: "swap",
});
