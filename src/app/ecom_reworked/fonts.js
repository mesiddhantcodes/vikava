import localFont from "next/font/local";

export const boldonse = localFont({
    src: [
        { path: "../../../fonts/ecomm/boldonse-regular.ttf", weight: "400" },
    ],
    variable: "--font-boldonse",
    display: "swap",
});

export const clashDisplay = localFont({
    src: [
        { path: "../../../fonts/ecomm/clashdisplay-medium.otf", weight: "500" },
        { path: "../../../fonts/ecomm/clashdisplay-semibold.otf", weight: "600" },
    ],
    variable: "--font-clashdisplay",
    display: "swap",
});

export const meowScript = localFont({
    src: [
        { path: "../../../fonts/ecomm/meowscript-regular.ttf", weight: "400" },
    ],
    variable: "--font-meowscript",
    display: "swap",
});
