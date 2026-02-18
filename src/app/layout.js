// import "./globals.css";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import "./styles/themes/vikava.css";
import Navbar from "./vikava/component/Navbar";
import Footer from "./vikava/component/Footer";
import "./styles/globals.css";
import {
  geistBold,
  geistMedium,
  geistSemiBold,
  greatVibesRegular,
} from "./fonts";
import WhatsAppButton from "./vikava/component/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://www.vikavalabs.com"),

  title: {
    default: "Vikava Labs | Business Building Infrastructure for Founders",
    template: "%s | Vikava Labs",
  },

  description:
    "Founder-first business-building infrastructure for clarity, governance, and accountable execution across design, sourcing, growth, and commerce.",

  keywords: [
    "business building infrastructure india",
    "founder execution partner india",
    "business growth ecosystem india",
    "integrated business execution services",
    "vikava labs",
  ],

  alternates: {
    canonical: "https://www.vikavalabs.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Business Building Infrastructure for Founders | Vikava Labs",
    description:
      "Founder-first business-building infrastructure for clarity, governance, and accountable execution.",
    url: "https://www.vikavalabs.com",
    siteName: "Vikava Labs",
    images: [
      {
        url: "/og/vikava-labs.jpg",
        width: 1200,
        height: 630,
        alt: "Vikava Labs – Business Building Infrastructure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Building Infrastructure for Founders | Vikava Labs",
    description:
      "Founder-first infrastructure combining strategy, execution, and governance.",
    images: ["/og/vikava-labs.jpg"],
  },

  verification: {
    google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMedium.variable} ${geistBold.variable} ${geistSemiBold.variable} ${greatVibesRegular.variable} pt-[198px]`}
      >
        <Navbar />
        <main className="pt-[98px]">{children}</main>
        <section className="relative z-20 w-full">
          {" "}
          <Footer />
        </section>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
