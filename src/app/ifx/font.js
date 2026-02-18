import localFont from "next/font/local";

/* ========== EB Garamond ========== */
export const ebgaramond = localFont({
  src: [
    { path: "../../../fonts/ifx/ebgaramond-regular.ttf", weight: "400" },
    { path: "../../../fonts/ifx/ebgaramond-bold.ttf", weight: "700" },
  ],
  variable: "--font-ebgaramond",
  display: "swap",
});

/* ========== Montserrat ========== */
export const montserrat = localFont({
  src: [
    { path: "../../../fonts/ifx/montserrat-light.ttf", weight: "300" },
    { path: "../../../fonts/ifx/montserrat-regular.ttf", weight: "400" },
    { path: "../../../fonts/ifx/montserrat-medium.ttf", weight: "500" },
    { path: "../../../fonts/ifx/montserrat-semibold.ttf", weight: "600" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});
