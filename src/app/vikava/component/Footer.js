import Link from "next/link";
import BulletItem from "../../BulletItem";
import NewsletterForm from "./Newsletter";
import SocialIcons from "./SocialIcons";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  {
    label: "Founder Community",
    href: "/blogs/vikava-labs-founders-community-ek-saath-safar",
  },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const servicesList = [
  {
    label: "Design library & digital showroom",
    href: "/design-library-of-india",
  },
  // { label: "Ecommerce ", href: "/ecom_reworked" },
];

const businessPods = [
  { label: "Business strategy & founder advisory", href: "/mac" },

  { label: "Creative design & visual identity", href: "/vikava_design_lab" },

  { label: "Branding, content & digital visibility", href: "/last-hashtag" },
  { label: "Ecommerce & marketplace growth", href: "/ecom_reworked" },
];

const fashionPods = [
  {
    label: "Design Library & Digital Showroom",
    href: "/design-library-of-india",
  },
  { label: "Textile & apparel product design", href: "/design-cartel" },

  { label: "Textile & apparel sourcing", href: "/sourcing-cartel" },
  {
    label: "Sustainable sourcing & supply chain",
    href: "/sustainable-design-library",
  },
  { label: "Couture & designer commerce", href: "/ifx" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F0E9] py-10 text-[#181818] z-20">
      <div className="w-full max-w-[100%] mx-auto px-4 lg:px-12 flex flex-col gap-8 lg:gap-12">
        {/* BRAND TITLE */}
        <div className="w-full overflow-hidden">
          <h1 className="geist-bold text-center whitespace-nowrap leading-none tracking-[0.01em] text-[13vw] sm:text-5xl md:text-[13.5vw]">
            VIKAVA LABS
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT BLOCK */}
          <div className="max-w-sm w-full">
            <h2 className="geist-semibold text-[clamp(24px,3vw,38px)] leading-tight">
              Stay connected
            </h2>

            <p className="mt-4 text-[clamp(14px,1.1vw,18px)] geist-medium leading-relaxed text-[#383838]">
              Join our newsletter for tips, updates, and project highlights—only
              the good stuff.
            </p>

            <NewsletterForm />
            <SocialIcons />
          </div>

          {/* RIGHT GRID */}
          <div
            className="
              grid w-full flex-1 gap-10
              grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
              text-[clamp(12px,0.95vw,14px)]
            "
          >
            {/* PAGES */}
            <div>
              <h3 className="mb-3 text-[16px] font-semibold geist-medium uppercase tracking-[0.12em] text-[#000]">
                Pages
              </h3>
              <ul className="space-y-1.5">
                {pages.map((page) => (
                  <BulletItem key={page.label}>
                    <Link href={page.href}>{page.label}</Link>
                  </BulletItem>
                ))}
              </ul>
            </div>
            {/* BUSINESS PODS */}
            <div>
              <h3 className="mb-3 text-[16px] font-semibold geist-medium uppercase tracking-[0.12em] text-[#000]">
                Business Building Pods
              </h3>
              <ul className="space-y-1.5">
                {businessPods.map((item) => (
                  <BulletItem key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </BulletItem>
                ))}
              </ul>
            </div>
            {/* FASHION PODS */}
            <div>
              <h3 className="mb-3 text-[16px] font-semibold geist-medium uppercase tracking-[0.12em] text-[#000]">
                Fashion & Textiles Pods
              </h3>
              <ul className="space-y-1.5">
                {fashionPods.map((item) => (
                  <BulletItem key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </BulletItem>
                ))}
              </ul>
            </div>
            {/* CONTACT */}
            <div>
              <h3 className="mb-3 text-[16px] font-semibold geist-medium uppercase tracking-[0.12em] text-[#000]">
                Contact Info
              </h3>
              <div className="space-y-1.5 text-[#2D2C23]">
                <p className="pt-2 text-[14px] leading-tight">
                  Vikava Labs Pvt. Ltd. <br className="hidden lg:block" /> Business-Building Infrastructure for
                  Growth-Stage Brands
                </p>

                <p className="text-[14px]">info@vikavalabs.com</p>
                <p className="pt-2 text-[14px] leading-tight max-w-[260px]">
                  Greater Noida, Uttar Pradesh, India <br />
                </p>
                <p className="pt-2 text-[14px] leading-tight max-w-[260px] break-all">
                  CIN: U13921UP2023PTC177576
                  <br />
                  GSTIN: 09AAJCV2301H1ZG
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-[#000] pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[16px] text-[#201F24]">
            <p className="text-center md:text-left geist-medium w-full md:w-auto">
              © {new Date().getFullYear()} Vikava Labs All Rights Reserved
            </p>

            <div className="text-[14px] w-full md:w-auto">
              <ul className="flex flex-row flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-center md:text-left">
                <BulletItem>
                  <Link href="/terms-and-condition">Terms &amp; Conditions</Link>
                </BulletItem>

                <BulletItem>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </BulletItem>

                <BulletItem>
                  <Link href="/legal-disclaimer">Legal Disclaimer</Link>
                </BulletItem>
              </ul>
            </div>
          </div>
        </div>
        {/* DISCLAIMER */}
        <div className=" text-center text-[11px] geist-semibold md:text-[12px] leading-relaxed text-[#3A3A3A] max-w-6xl mx-auto -mb-2">
          <p>
            Disclaimer: Vikava Labs provides business-building infrastructure
            and execution support. Outcomes depend on scope, inputs, and market
            conditions. No guarantees are implied.
          </p>

          <p className="">
            All third-party trademarks, logos, and brand names referenced on
            this website belong to their respective owners and are used for
            identification purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
