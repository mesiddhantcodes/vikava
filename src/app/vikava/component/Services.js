"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const containerRef = useRef(null);
  const [bgColor, setBgColor] = useState("#E8E8E8");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define background colors for each section (10 sections)
  const sectionColors = [
    "#E8E8E8", // Section 1 - Mentoring (grey)
    "#D5D1CA", // Section 2 - Ecosystem (beige)
    "#E8E4DF", // Section 3 - Branding (light beige)
    "#E0EBF0", // Section 4 - Design Services (light blue)
    "#E0EBF0", // Section 5 - Design Inspiration (light blue)
    "#E8E4DF", // Section 6 - Sourcing (light beige)
    "#D5D1CA", // Section 7 - Sustainable (beige)
    "#E8E4DF", // Section 8 - Digital Marketing (light beige)
    "#E0EBF0", // Section 9 - E-com (light blue)
    "#E8E4DF", // Section 10 - Couture (light beige)
  ];

  // Update background color based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionIndex = Math.floor(latest * sectionColors.length);
      const clampedIndex = Math.min(sectionIndex, sectionColors.length - 1);
      setBgColor(sectionColors[clampedIndex]);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Horizontal scroll - 10 sections total
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-900%"]);

  return (
    <>
      {/* DESKTOP VERSION - Hidden on mobile */}
      <section
        ref={containerRef}
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
          height: "1050vh",
        }}
        className="relative hidden lg:block"
      >
        {/* Sticky container */}
        <div className="sticky top-20 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            {/* SECTION 1 - Mentoring & Consultancy */}
            <div className="min-w-[100vw] h-full flex flex-col justify-center px-12 lg:px-12 xl:px-20">
              <div className="max-w-7xl">
                <h2 className="text-3xl md:text-5xl geist-bold lg:text-[100px] xl:text-[140px] font-bold lg:leading-[100px] xl:leading-[130px] text-left text-white mb-12 barlow-700">
                  Our <span className="greatvibes-regular"> Services</span>
                </h2>

                <div className="space-y-6 relative">
                  {/* Number [1] - top left, desktop only */}
                  <h1 className="barlow-400 absolute lg:block hidden -left-6 font-normal top-0 text-[#1b1c18]">
                    [1]
                  </h1>

                  <h3 className="text-[36px]  geist-semibold  lg:text-[48px] font-normal text-[#1b1c18]">
                    Business Strategy & Founder Advisory{" "}
                  </h3>

                  <p className="text-[18px] lg:text-[20px]  geist-medium  text-[#1b1c18] max-w-3xl leading-relaxed">
                    Build clarity, decision systems, compliance discipline, and
                    execution accountability from day-zero to scale
                  </p>

                  <p className="text-[16px] text-[#1b1c18]/80 geist-medium max-w-3xl leading-relaxed">
                    रणनीति, निर्णय प्रणाली, अनुपालन अनुशासन और निष्पादन
                    जवाबदेही-शुरुआत से स्केल तक।
                  </p>

                  <Link href="/mac">
                    <button className="mt-8 text-[#1b1c18] geist-bold underline text-[16px]">
                      Go to MAC
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* SECTION 2 - ECOSYSTEM with Images */}
            <div className="min-w-[100vw] h-full hidden lg:block relative px-10 py-20">
              {/* Sanskrit text - top right */}
              <p className="absolute lg:right-[5rem] xl:right-[40rem] geist-medium top-20 text-[26px] text-[#928f8a] font-normal leading-[39px] tracking-[2px] text-center">
                उत्साहस्य बीजं ज्ञानं, प्रेरणा च पराक्रमम्।
                <br />
                समर्पणं सर्वकार्येषु, सिद्धिर्भवति सुव्रत।"
              </p>

              {/* Left image - tall fashion image */}
              <img
                className="absolute left-[-15rem] top-0 h-[80%] object-cover"
                src="/vikava/service1.jpg"
                alt="Fashion revolution"
              />

              {/* Large E letter - bottom right */}
              <img
                src="/vikava/Eco.svg"
                alt="E"
                className="
                absolute
                hidden lg:block
                bottom-20
                z-10
                object-contain

                /* Responsive positioning */
                right-[20rem]
                2xl:right-[14rem]
                xl:right-[8rem]
                lg:right-[2rem]

                /* Responsive sizing */
                h-[50%]
                max-h-[420px]
                w-auto
                max-w-[660px]
  "
              />

              {/* Center image with white border */}
              <img
                className="absolute border-[8px] border-white top-[30%] h-[30%] lg:h-[35%] w-auto object-cover max-w-[400px]"
                src="/vikava/service22.jpg"
                alt="Consultancy"
                width="500"
                height="500"
              />
            </div>

            {/* SECTION 3 - Branding Service */}
            <div className="min-w-[100vw] h-full flex items-center justify-center px-12 lg:px-12 xl:px-20">
              <div className="w-[90%] flex flex-col justify-center relative h-full">
                <div className="py-10 relative lg:pl-10 xl:pl-20">
                  {/* Number [2] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden left-16 font-normal top-5 text-[#3C3936]">
                    [2]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[35px] lg:text-[31px]  geist-bold md:text-[27px] text-[23px] text-[#3C3936] flex-col flex font-normal leading-[30px] text-left">
                    Creative Design & Visual Identity
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px]  geist-semibold  text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3 max-w-[500px]">
                    Brand language, identity, design assets, and content systems
                    that improve recall and conversion.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] lg:text-sm text-xs text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-3"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    ब्रांड भाषा, पहचान, डिज़ाइन एसेट्स और कंटेंट सिस्टम-जो
                    याददाश्त और कन्वर्ज़न बढ़ाते हैं।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/vikava_design_lab"}>
                    <p className="relative group cursor-pointer w-full text-center lg:w-fit my-2">
                      <span className="text-sm lg:text-[15px]   geist-bold lg:leading-[16.9px] tracking-[0.5px] text-[#3C3936] hover:text-black">
                        <u>Go to Vikava Design lab</u>
                      </span>
                    </p>
                  </Link>

                  {/* Sanskrit quote - bottom */}
                  <div className="w-full flex justify-center lg:justify-end items-center pt-[2rem]">
                    <p
                      className="mont-400 whitespace-nowrap text-[16px] lg:text-[26px] text-[#868686] font-normal leading-[39px] tracking-[2px] text-center"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      स्वप्नस्यारम्भे विश्वस्य, जीवनस्यापि सर्वदा। उत्साहेन
                      समृद्धिः
                      <br />
                      स्यात्, यात्रा सम्प्रेषिता विद्यते।
                    </p>
                  </div>

                  {/* Image - top right absolute */}
                  <img
                    className="absolute hidden lg:block top-[-2rem] lg:h-[12rem] xl:h-[16rem] right-0 w-auto object-cover drop-shadow-lg"
                    src="/vikava/service33.jpg"
                    alt="Branding tools"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4 - Design Services */}
            {/* SECTION 4 - Design Services */}
            <div className="min-w-[100vw] h-full flex items-center justify-center px-12 lg:px-20 ">
              <div className="w-full flex flex-col justify-center relative h-full py-10">
                {/* Top section - Images with infinity GIFs */}
                <div className="flex flex-row gap-10 w-full h-1/2 items-center justify-center lg:justify-normal relative">
                  {/* First image column - aligned to bottom */}
                  <div className="flex flex-col h-full items-center justify-end mt-[8rem]">
                    <img
                      className="border-white h-[16rem] object-cover shadow-xl"
                      src="/vikava/service4.jpg"
                      alt="Design tools"
                    />
                  </div>

                  {/* Second image column - aligned to top */}
                  <div className="flex flex-col h-full items-center justify-start">
                    <img
                      id="changer"
                      className="border-white h-[16rem] object-cover shadow-xl"
                      src="/vikava/service5.jpg"
                      alt="Color swatches"
                    />
                  </div>

                  {/* Blue infinity GIF - overlay with mix-blend-multiply */}
                  <img
                    id="infinity"
                    src="/vikava/infinte.gif"
                    alt=""
                    width="500"
                    height="450"
                    className="
                      absolute
                      hidden lg:block
                      top-1/2 -translate-y-1/2
                      z-20
                      w-auto
                      h-auto
                      max-h-[85%]
                      object-contain
                      mix-blend-multiply

                      right-[-6rem]        /* ≥1800px */
                      2xl:right-[-6rem]   /* ~1536–1799px */
                      xl:right-[-4rem]    /* ~1280–1535px */
                      lg:right-[-12rem]   /* ~1024–1279px - Push further out */
                    "
                  />

                  {/* Yellow infinity GIF - hidden overlay */}
                  <img
                    id="overlay-image"
                    className="absolute -right-[4rem] hidden lg:block h-[100%] top-[5rem] z-10 w-auto object-fill"
                    src="/services/yellow-infinity.gif"
                    alt=""
                    width="500"
                    height="450"
                    style={{ opacity: 0 }}
                  />
                </div>

                {/* Bottom section - Text content */}
                <div className="lg:px-[8rem] xl:px-[18rem] px-5 py-10 -top-5 relative">
                  {/* Number [3] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden left-[17rem] font-normal text-[#3C3936] top-5">
                    [3]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[34px] lg:text-[31px]  geist-bold  text-[#3C3936] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                    Textile & Apparel Product Design{" "}
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px]  text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-2 max-w-[450px]">
                    Production-ready design for apparel, home, and
                    lifestyle-built for sampling, costing, and
                    manufacturability.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] lg:text-sm text-xs text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-2"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    परिधान, होम और लाइफस्टाइल के लिए उत्पादन-तैयार
                    डिज़ाइन-सैंपलिंग और मैन्युफैक्चरिंग के अनुरूप।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/design-cartel"}>
                    <p className="relative group cursor-pointer w-fit lg:my-2 xl:my-0 xl:mb-2">
                      <span className="text-sm xl:text-[15px] geist-bold text-[#3C3936] lg:leading-[16.9px] tracking-[0.5px] hover:text-black">
                        <u>Go to Design Cartel</u>
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* SECTION 5 - Design Inspiration */}
            <div className="min-w-[100vw] h-full flex items-center justify-center  relative">
              <div className="w-full flex flex-col justify-center relative h-full">
                {/* Main content box - centered */}
                <div className="w-full z-10 h-full flex items-center justify-center">
                  <div className="w-[70%] h-content-fit bg-[#F7F0DF]">
                    <div className="px-20 py-[4rem] relative">
                      {/* Number [4] - top left */}
                      <h1 className="barlow-400 absolute lg:block hidden text-[#3C3936] left-14 font-normal top-11">
                        [4]
                      </h1>

                      {/* Heading and pronunciation */}
                      <h1 className="xl:text-[35px] geist-bold text-[#3C3936] lg:text-[31px] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                        Design Library & Digital Showroom{" "}
                      </h1>

                      {/* English description */}
                      <p className="text-[18px] lg:text-[20px] geist-medium text-[#3C3936] text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3">
                        A permission-based, private design memory system for
                        exporters and buyers—built for faster discovery without
                        public listing.
                      </p>

                      {/* Hindi description */}
                      <p
                        className="barlow-400 xl:text-[16px] text-[#3C3936] lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3"
                        style={{
                          fontFamily: "Noto Sans Devanagari, sans-serif",
                        }}
                      >
                        निर्यातकों और खरीदारों के लिए निजी, अनुमति-आधारित
                        डिज़ाइन लाइब्रेरी-बिना सार्वजनिक लिस्टिंग के तेज़ खोज।
                      </p>

                      {/* CTA Button */}
                      <Link href={"/design-library-of-india"}>
                        <p className="relative group cursor-pointer w-fit my-2">
                          <span className="text-sm lg:text-[15px] text-[#3C3936] geist-bold lg:leading-[16.9px] tracking-[0.5px] hover:text-black">
                            <u>Go to Design library of India</u>
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Sanskrit quote */}
                <div className="w-full z-10 flex ml-20 mb-[6rem] items-center">
                  <p
                    className="mont-400 text-[16px] text-[#F7F0DF] lg:text-[26px] font-normal leading-[39px] tracking-[2px] text-center"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    उत्साहशीलस्य सर्वकार्येषु सिद्धिर्भवति। सफलता
                    <br />
                    सञ्चयेन। न संशयोऽस्ति नापि असङ्गतिः।
                  </p>
                </div>

                {/* Background image - absolute positioned */}
                <div className="absolute inset-0 overflow-hidden top-[-2rem]">
                  <img
                    className="w-full h-full object-fill"
                    src="/vikava/service6.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* SECTION 6 - Sourcing */}
            <div className="min-w-[100vw] h-full flex items-center justify-center ">
              <div className="w-full flex flex-col justify-end relative px-10 h-full py-20">
                {/* Large "INNOVATE" text - top left background */}
                <h1
                  className="barlow-700 hidden lg:block absolute lg:text-[120px] xl:text-[180px] font-bold lg:leading-[110px] xl:leading-[157px] text-left text-white top-[2rem] lg:-left-16 xl:-left-28"
                  style={{
                    filter: "drop-shadow(6px 6px 12px rgba(0, 0, 0, 0.4))",
                  }}
                >
                  INNOVATE
                </h1>

                {/* Main content */}
                <div className="px-10 lg:px-10 xl:px-20 relative -top-10">
                  {/* Number [5] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden left-[60px] top-[-1rem] font-normal text-[#3C3936]">
                    [5]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="text-[#3C3936] xl:text-[34px] geist-bold lg:text-[31px] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                    Textile & Apparel Sourcing
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px] text-[#3C3936] geist-medium font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-2 max-w-[500px]">
                    End-to-end sourcing and supply chain governance for apparel,
                    home textiles, and lifestyle products from India.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] text-[#3C3936] lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-2"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    भारत से परिधान और टेक्सटाइल के लिए एंड-टू-एंड सोर्सिंग और
                    सप्लाई चेन गवर्नेंस।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/sourcing-cartel"}>
                    <p className="relative group cursor-pointer w-fit my-2">
                      <span className="text-sm lg:text-[15px] geist-bold lg:leading-[16.9px] text-[#3C3936] tracking-[0.5px] hover:text-black">
                        <u>Go to Sourcing cartel</u>
                      </span>
                    </p>
                  </Link>
                </div>

                {/* Image - top right absolute */}
                <img
                  className="absolute hidden lg:block top-0 -right-24 lg:-right-32 xl:-right-16 h-[60%] lg:h-[65%] xl:h-[75%] w-auto object-cover"
                  src="/vikava/service77.jpg"
                  alt="Sourcing"
                />
              </div>
            </div>
            {/* SECTION 7 - Sustainable Sourcing */}
            <div className="min-w-[100vw] h-full top-10 flex items-center justify-center ">
              <div className="w-[100rem] flex flex-col justify-center items-center lg:justify-start relative pl-[40px] lg:pl-[20rem] xl:pl-20 h-full py-12 xl:py-8">
                {/* Main content */}
                <div className="lg:px-10 w-full px-5 py-0 relative">
                  {/* Number [6] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden text-[#3C3936] left-6 font-normal -top-4">
                    [6]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[34px] lg:text-[31px] md:text-[27px] text-[23px]  geist-bold  text-[#3C3936] flex-col flex font-normal leading-[30px] text-left">
                    Sustainable Sourcing & Supply Chain
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px] text-[#3C3936] geist-medium font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3 max-w-[500px]">
                    Certified materials, ethical supply chains, audits, and
                    documentation for sustainability-led brands and buyers.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] text-[#3C3936] lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-3"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    सर्टिफाइड मटीरियल, नैतिक सप्लाई चेन और अनुपालन-सस्टेनेबल
                    ब्रांड्स के लिए।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/sustainable-design-library"}>
                    <p className="relative group cursor-pointer w-full text-center lg:w-fit my-2">
                      <span className="text-sm lg:text-[15px] text-[#3C3936] geist-bold lg:leading-[16.9px] tracking-[0.5px] hover:text-black">
                        <u>Go to Sustainable Design Library</u>
                      </span>
                    </p>
                  </Link>

                  {/* Sanskrit quote - right side */}
                  <div className="w-full hidden lg:flex justify-center items-center h-full ml-[8rem]">
                    <p
                      className="mont-400 whitespace-nowrap text-[16px] lg:text-[26px] text-[#908B7C] font-normal leading-[39px] tracking-[2px] text-center"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      स्वयं प्रेरितः सदैव स्यात्, योऽस्ति नैव निराश्रयः। आत्मनो
                      <br />
                      मोक्षाय सद्गतिः, उत्साहेन समृद्धिमान्।
                    </p>
                  </div>
                </div>

                {/* Image - bottom left absolute with white border */}
                <img
                  className="absolute hidden border-[8px] border-white lg:block bottom-20 left-10 lg:left-20 h-[30%] lg:h-[35%] w-auto object-cover"
                  src="/vikava/service8.jpg"
                  alt="Sustainable sourcing"
                />
              </div>
            </div>
            {/* SECTION 8 - Digital Marketing */}
            <div className="min-w-[100vw] h-full flex items-center justify-center  relative">
              <div className="w-full flex flex-col justify-center items-center lg:justify-end relative px-[40px] lg:px-20 h-full pb-[6rem] my-0">
                {/* Main content */}
                <div className="px-10 lg:px-10 xl:px-40 relative">
                  {/* Number [7] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden left-[2rem] xl:left-[8.8rem] text-[#3C3936] font-normal top-[-1.2rem]">
                    [7]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[34px] geist-bold text-[#3C3936] lg:text-[31px] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                    Brand, Content & Digital Visibility{" "}
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px] geist-medium text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3 max-w-[500px]">
                    Structured growth execution across content, performance, and
                    demand loops-built to compound visibility.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] text-[#3C3936] lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-3"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    कंटेंट और परफॉर्मेंस के ज़रिये संरचित ग्रोथ-जो समय के साथ
                    ब्रांड विज़िबिलिटी बढ़ाए।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/last-hashtag"}>
                    <p className="relative group cursor-pointer w-fit text-left lg:w-fit my-2">
                      <span className="text-sm lg:text-[15px] geist-bold lg:leading-[16.9px] tracking-[0.5px] text-[#3C3936] hover:text-black">
                        <u>Go to Last#Tag</u>
                      </span>
                    </p>
                  </Link>
                </div>

                {/* Sanskrit quote - top right */}
                <p
                  className="mont-400 absolute hidden lg:block right-0 top-[5rem] whitespace-nowrap text-[16px] lg:text-[26px] z-20 text-[#A29166] font-normal leading-[39px] tracking-[2px] text-center"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  प्रेरणाशक्तिर्या त्रैलोक्यं जगाम, तामेव पश्येत् सदा।
                  <br />
                  स्वप्ने यदि न पश्येत् संपद्यते, विचारितुं किं कुर्यात्?॥
                </p>

                {/* Large C SVG - top left */}
                <img
                  className="absolute hidden lg:block top-0 left-[-8rem] lg:left-[-10rem] xl:left-[-12rem] h-[40%] lg:h-[45%] xl:h-[50%] w-auto object-cover"
                  src="/vikava/service8.jpg"
                  alt="C"
                />
              </div>
            </div>
            {/* SECTION 9 - E-com Services */}
            <div className="min-w-[100vw] h-full flex items-center justify-center  relative">
              <div className="w-full flex flex-col lg:justify-start relative px-[40px] lg:px-10 xl:px-20 h-full py-5">
                {/* Main content */}
                <div className="lg:px-[4rem] xl:px-[10rem] py-[4rem] relative">
                  {/* Number [8] - top left */}
                  <h1 className="barlow-400 absolute lg:block hidden left-[8.8rem] text-[#3C3936] font-normal top-10">
                    [8]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[34px] geist-bold text-[#3C3936] lg:text-[31px] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                    Ecommerce & Marketplace Growth
                  </h1>

                  {/* English description */}
                  <p className="text-[18px] lg:text-[20px] text-[#3C3936] geist-medium font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-2 max-w-[450px]">
                    Commerce engines that manage storefronts, funnels, CRM, and
                    marketplace execution predictably.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] lg:text-sm text-xs text-[#3C3936] font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-2"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    ईकॉमर्स सिस्टम जो स्टोरफ्रंट, फनल, CRM और मार्केटप्लेस को
                    व्यवस्थित रूप से चलाएं।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/ecom_reworked"}>
                    <p className="relative group cursor-pointer w-fit text-left lg:w-fit my-2">
                      <span className="text-sm lg:text-[15px] text-[#3C3936] geist-bold lg:leading-[16.9px] tracking-[0.5px] hover:text-black">
                        <u>Go to E-com reworked</u>
                      </span>
                    </p>
                  </Link>
                </div>

                {/* First image - bottom center (larger) */}
                <img
                  className="absolute hidden lg:block bottom-20 right-[5rem] lg:right-[8rem] xl:right-[15rem] w-[60%] lg:w-[50%] xl:w-[70%] h-auto max-h-[40%] object-cover"
                  src="/vikava/service9.jpg"
                  alt="E-commerce service"
                />

                {/* Second image - bottom right with white border (smaller, overlapping) */}
                <img
                  className="absolute hidden border-[8px] border-white lg:block bottom-[7rem] right-0 w-auto h-[40%] lg:h-[45%] xl:h-[50%] object-cover"
                  src="/vikava/service100.jpg"
                  alt="E-commerce platform"
                />
              </div>
            </div>
            {/* SECTION 10 - Couture Commerce */}
            <div className="min-w-[110vw] h-full flex items-center justify-center  relative">
              <div className="w-full flex flex-col justify-end relative h-full py-50">
                {/* Large "GROW" text - top left background */}
                <h1
                  className="
                    barlow-700 hidden lg:block absolute
                    font-bold text-white text-left
                    drop-shadow-[6px_6px_12px_rgba(0,0,0,0.4)]

                    /* Responsive sizing */
                    text-[180px]
                    xl:text-[150px]
                    lg:text-[120px]

                    /* Responsive positioning */
                    top-[2rem]
                    xl:top-[2rem]
                    lg:top-[3rem]

                    -left-28
                    xl:-left-20
                    lg:-left-12
                  "
                >
                  GROW
                </h1>

                {/* Main content */}
                <div
                  className="
                relative
                px-5
                lg:px-0

                /* Responsive padding */
                py-10
                lg:py-16
                xl:py-20

                lg:pl-[3rem]
                xl:pl-[7rem]
                z-10
              "
                >
                  {/* Number [9] - top left */}
                  <h1
                    className="
                      barlow-400 hidden lg:block absolute
                      text-[#3C3936] font-normal

                      left-[4rem]
                      xl:left-[6rem]

                      top-[4rem]
                      xl:top-[4rem]
                    "
                  >
                    [9]
                  </h1>

                  {/* Heading and pronunciation */}
                  <h1 className="xl:text-[34px] lg:text-[31px] geist-bold text-[#3C3936] md:text-[27px] text-[23px] flex-col flex font-normal leading-[30px] text-left">
                    Couture & Designer Commerce
                  </h1>

                  {/* English description - constrained width for line break */}
                  <p className="text-[18px] lg:text-[20px] text-[#3C3936] geist-medium font-normal lg:leading-[1.6] tracking-[-0.03em] text-left py-3 max-w-[500px] xl:max-w-[600px]">
                    A tech-enabled operating layer for Indian couture—connecting
                    designers, stores, and buyers through structured commerce.
                  </p>

                  {/* Hindi description */}
                  <p
                    className="barlow-400 xl:text-[16px] text-[#3C3936] lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-3"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    भारतीय कुट्योर के लिए टेक-सक्षम इन्फ्रास्ट्रक्चर-डिज़ाइनर्स,
                    स्टोर्स और खरीदारों को जोड़ता हुआ।
                  </p>

                  {/* CTA Button */}
                  <Link href={"/ifx"}>
                    <p className="relative group cursor-pointer w-fit my-2">
                      <span className="text-sm xl:text-[15px] geist-bold text-[#3C3936] lg:leading-[16.9px] tracking-[0.5px] hover:text-black">
                        <u>Go to IFX</u>
                      </span>
                    </p>
                  </Link>
                </div>

                {/* Image - right side full height, adjusted object-fit and position */}
                <div className="absolute hidden lg:block top-0 right-0 h-full w-[40%] xl:w-[50%] z-0">
                  <img
                    className="w-full h-full object-cover object-left-top"
                    src="/vikava/service111.avif"
                    alt="Couture commerce"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERSION - Hidden on desktop */}
      <section className="lg:hidden block overflow-hidden bg-[#E8E8E8] transition-colors duration-1000">
        {/* MOBILE SECTION 1 - Mentoring & Consultancy */}
        <div className="h-[95rem] w-screen flex justify-center items-center">
          <div className="w-full flex flex-col justify-start h-full relative py-8">
            <div className="flex px-10 pb-10 flex-col justify-start">
              <h1 className="text-[64px] font-bold leading-[64px] text-left text-white barlow-700">
                Our <span className="greatvibes-regular">Services</span>
              </h1>

              <div className="px-3 pt-[4.5rem] relative">
                <h1 className="barlow-400 absolute -left-1 font-bold text-[#3C3936] top-14">
                  [1]
                </h1>

                <h1 className="geist-bold text-[24px] text-[#3C3936] flex-col flex font-normal leading-[30px] text-left">
                  Business Strategy & Founder Advisory{" "}
                  <span
                    className="text-[15px] font-light leading-[30px] text-left text-[#515151]"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  ></span>
                </h1>

                <p className="text-[13px] geist-medium text-[#3C3936] font-normal leading-4 tracking-[-0.03em] text-left py-3">
                  Build clarity, decision systems, compliance discipline, and
                  execution accountability from day-zero to scale
                </p>

                <p
                  className="barlow-400 text-[13px] text-[#3C3936] font-medium leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  रणनीति, निर्णय प्रणाली, अनुपालन अनुशासन और निष्पादन
                  जवाबदेही-शुरुआत से स्केल तक।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/mac">
                    <span className="text-[#3C3936] text-[14px] geist-bold tracking-[0.5px] cursor-pointer">
                      <u>Go to MAC</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start relative">
              <img
                className="absolute w-[55%] object-cover object-left-top"
                alt=""
                src="/vikava/service1.jpg"
              />
              <img
                className="absolute w-[70%] border-[8px] border-white h-[211px] object-cover object-left-top right-5 top-[100px]"
                alt=""
                src="/vikava/service22.jpg"
              />
            </div>

            <div className="flex flex-col justify-end relative pb-14 top-[30rem]">
              <p
                className="mont-400 text-[14px] font-normal leading-4 tracking-[2px] text-[#928F8A] text-center py-5"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                उत्साहस्य बीजं ज्ञानं, प्रेरणा च पराक्रमम्।
                <br />
                समर्पणं सर्वकार्येषु, सिद्धिर्भवति सुव्रत।"
              </p>
            </div>

            <div className="flex flex-col justify-start relative left-10 right-10 top-[31rem]">
              <img className="w-[80%] h-auto" alt="" src="/vikava/Eco.svg" />
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 2 - Branding */}
        <div className="h-screen w-screen flex justify-center items-center bg-[#E8E4DF]">
          <div className="w-full flex flex-col justify-start relative h-full py-10">
            <div className="flex px-10 pb-10 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold top-6 text-[#3C3936]">
                  [2]
                </h1>

                <h1 className="geist-bold  text-[24px] flex-col text-[#3C3936] flex font-normal leading-[30px] text-left">
                  Creative Design & Visual Identity
                </h1>

                <p className="text-[13px] geist-medium  font-normal text-[#3C3936] leading-4 tracking-[-0.03em] text-left py-3">
                  Brand language, identity, design assets, and content systems
                  that improve recall and conversion.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium text-[#3C3936] leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  ब्रांड भाषा, पहचान, डिज़ाइन एसेट्स और कंटेंट सिस्टम-जो
                  याददाश्त और कन्वर्ज़न बढ़ाते हैं।
                </p>

                <p className="relative group cursor-pointer w-fit mt-4">
                  <Link href="/vikava_design_lab">
                    {" "}
                    <span className="text-[15px] geist-bold text-[#3C3936] tracking-[0.5px]">
                      <u>Go to Vikava Design lab</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <img
              width="1500"
              height="1500"
              className="w-full mix-blend-multiply object-cover origin-center mb-10"
              alt=""
              src="/vikava/service33.jpg"
            />
          </div>
        </div>

        {/* MOBILE SECTION 3 - Design Services */}
        <div className="h-[65rem] w-screen flex justify-center items-center bg-[#E0EBF0] pt-[15rem]">
          <div className="w-full flex flex-col justify-start relative h-full">
            <p
              className="mont-400 text-sm font-normal text-[#868686] leading-4 tracking-[2px] text-center px-10 py-3"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              स्वप्नस्यारम्भे विश्वस्य, जीवनस्यापि सर्वदा। उत्साहेन समृद्धिः
              स्यात्, यात्रा सम्प्रेषिता विद्यते।
            </p>

            <div className="flex px-10 py-10 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute text-[#3C3936] -left-0 top-4 font-bold ">
                  [3]
                </h1>

                <h1 className="geist-bold text-[24px] flex-col flex font-normal leading-[30px] text-left text-[#3C3936]">
                  Textile & Apparel Product Design{" "}
                </h1>

                <p className="text-[13px] geist-medium font-normal leading-4 text-[#3C3936] tracking-[-0.03em] text-left py-3">
                  Production-ready design for apparel, home, and lifestyle-built
                  for sampling, costing, and manufacturability.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium text-[#3C3936] leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  परिधान, होम और लाइफस्टाइल के लिए उत्पादन-तैयार
                  डिज़ाइन-सैंपलिंग और मैन्युफैक्चरिंग के अनुरूप।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/design-cartel">
                    <span className="text-[15px] geist-bold tracking-[0.5px] text-[#3C3936]">
                      <u>Go to Design Cartel</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="relative w-full px-10 flex justify-center">
              <img
                className="w-full h-auto max-w-[500px] mix-blend-multiply object-contain"
                alt=""
                src="/vikava/infinte.gif"
              />
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 4 - Design Inspiration */}
        <div className="h-[50rem] w-screen flex justify-center items-center">
          <div
            style={{
              backgroundImage: "url('/vikava/service6.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full flex flex-col justify-center relative h-full items-center"
          >
            <div className="flex px-10 py-10 bg-[#F7F0DF] flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold text-[#3C3936] top-6">
                  [4]
                </h1>

                <h1 className="geist-bold text-[24px] flex-col flex font-normal leading-[30px] text-left text-[#3C3936]">
                  Design Library & Digital Showroom{" "}
                </h1>

                <p className="text-[13px] geist-medium font-normal leading-4 tracking-[-0.03em] text-[#3C3936] text-left py-3">
                  A permission-based, private design memory system for exporters
                  and buyers—built for faster discovery without public listing.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium leading-4 text-[#3C3936] tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  निर्यातकों और खरीदारों के लिए निजी, अनुमति-आधारित डिज़ाइन
                  लाइब्रेरी-बिना सार्वजनिक लिस्टिंग के तेज़ खोज।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/design-library-of-india">
                    <span className="text-[15px] geist-bold text-[#3C3936] tracking-[0.5px]">
                      <u>Go to Design library of India</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 5 - Sourcing */}
        <div className="h-[54rem] w-screen flex justify-center items-center bg-[#E8E4DF]">
          <div className="w-full flex flex-col justify-start relative h-full">
            <div className="flex px-10 py-20 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 text-[#3C3936] font-bold top-6">
                  [5]
                </h1>

                <h1 className="geist-bold text-[24px] flex-col flex font-normal leading-[30px] text-left text-[#3C3936]">
                  Textile & Apparel Sourcing{" "}
                  <span className="text-[12px] font-light leading-[30px] text-left text-[#515151]">
                    [ˈsɔːsɪŋ]
                  </span>
                </h1>

                <p className="text-xs geist-medium font-normal text-[#3C3936] leading-4 tracking-[-0.03em] text-left py-3">
                  End-to-end sourcing and supply chain governance for apparel,
                  home textiles, and lifestyle products from India.
                </p>

                <p
                  className="barlow-400 text-xs text-[#3C3936] font-normal leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  भारत से परिधान और टेक्सटाइल के लिए एंड-टू-एंड सोर्सिंग और
                  सप्लाई चेन गवर्नेंस।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/sourcing-cartel">
                    {" "}
                    <span className="text-sm geist-bold text-[#3C3936] tracking-[0.5px]">
                      <u>Go to Sourcing cartel</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex w-full h-[500px] flex-col justify-start relative pb-14">
              <img
                width="1500"
                height="1500"
                className="absolute w-[60%] object-cover object-left-top left-0"
                alt=""
                src="/vikava/service77.jpg"
              />
              <img
                width="1500"
                height="1500"
                className="absolute z-[9] w-[60%] border-[8px] border-white object-cover object-left-top right-0 top-[150px]"
                alt=""
                src="/vikava/service4.jpg"
              />
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 6 - Sustainable Sourcing */}
        <div className="h-[45rem] w-screen flex justify-center items-center bg-[#D5D1CA]">
          <div className="w-full flex flex-col justify-start relative h-full pt-[15rem]">
            <div className="flex px-10 pb-10 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold top-6 text-[#3C3936]">
                  [6]
                </h1>

                <h1 className="geist-bold text-[24px] text-[#3C3936] flex-col flex font-normal leading-[30px] text-left">
                  Sustainable Sourcing & Supply Chain
                </h1>

                <p className="text-[13px] geist-medium font-normal leading-4 text-[#3C3936] tracking-[-0.03em] text-left py-3">
                  Certified materials, ethical supply chains, audits, and
                  documentation for sustainability-led brands and buyers.
                </p>

                <p
                  className="barlow-400 text-[13px] text-[#3C3936] font-medium leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  सर्टिफाइड मटीरियल, नैतिक सप्लाई चेन और अनुपालन-सस्टेनेबल
                  ब्रांड्स के लिए।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/sustainable-design-library">
                    {" "}
                    <span className="text-[15px] geist-bold text-[#3C3936] tracking-[0.5px]">
                      <u>Go to Sustainable Design Library</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col justify-start px-10 text-center">
              <p
                className="mont-400 text-[14px] text-[#908B7C] font-normal leading-4 tracking-[2px] text-center"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                स्वयं प्रेरितः सदैव स्यात्, योऽस्ति नैव निराश्रयः। आत्मनो
                मोक्षाय सद्गतिः, उत्साहेन समृद्धिमान्।
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 7 - Digital Marketing */}
        <div className="h-[52rem] w-screen flex justify-center items-center bg-[#E8E4DF]">
          <div className="w-full flex flex-col justify-start relative h-full pt-20">
            <div className="barlow-400 flex w-full flex-col justify-center items-center pb-14">
              <img
                width="1500"
                height="1500"
                className="w-[80%] h-auto"
                alt=""
                src="/vikava/C.svg"
              />
            </div>

            <div className="flex px-10 py-10 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold top-6 text-[#3C3936]">
                  [7]
                </h1>

                <h1 className="geist-bold text-[24px] flex-col flex font-normal text-[#3C3936] leading-[30px] text-left">
                  Brand, Content & Digital Visibility{" "}
                </h1>

                <p className="text-[13px] geist-medium font-normal leading-4 text-[#3C3936] tracking-[-0.03em] text-left py-3">
                  Structured growth execution across content, performance, and
                  demand loops-built to compound visibility.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium text-[#3C3936] leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  कंटेंट और परफॉर्मेंस के ज़रिये संरचित ग्रोथ-जो समय के साथ
                  ब्रांड विज़िबिलिटी बढ़ाए।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/last-tag">
                    <span className="text-[15px] geist-bold text-[#3C3936] tracking-[0.5px]">
                      <u>Go to Last#Tag</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 8 - E-com Services */}
        <div className="h-[60rem] w-screen flex justify-center items-center bg-[#E0EBF0]">
          <div className="w-full flex flex-col justify-start relative h-full">
            <p
              className="mont-400 text-[14px] text-[#A29166] font-normal leading-4 tracking-[2px] text-center px-10 py-5"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              प्रेरणाशक्तिर्या त्रैलोक्यं जगाम, तामेव पश्येत् सदा।
              <br />
              स्वप्ने यदि न पश्येत् संपद्यते, विचारितुं किं कुर्यात्?॥
            </p>

            <div className="flex px-10 py-10 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold top-6 text-[#3C3936]">
                  [8]
                </h1>

                <h1 className="geist-bold text-[24px] flex-col flex font-normal leading-[30px] text-left text-[#3C3936]">
                  Ecommerce & Marketplace Growth
                </h1>

                <p className="text-[13px] geist-medium font-normal leading-4 tracking-[-0.03em] text-left py-3 text-[#3C3936]">
                  Commerce engines that manage storefronts, funnels, CRM, and
                  marketplace execution predictably.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium leading-4 tracking-[1px] text-left py-3 text-[#3C3936]"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  ईकॉमर्स सिस्टम जो स्टोरफ्रंट, फनल, CRM और मार्केटप्लेस को
                  व्यवस्थित रूप से चलाएं।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/ecom_reworked">
                    {" "}
                    <span className="text-[15px] geist-bold tracking-[0.5px] text-[#3C3936]">
                      <u>Go to E-com reworked</u>
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex w-full h-[500px] flex-col justify-start relative">
              <img
                width="1500"
                height="1500"
                className="absolute w-full h-full object-cover left-0"
                alt=""
                src="/vikava/service9.jpg"
              />

              <img
                width="1500"
                height="1500"
                className="absolute z-[9] w-[261px] border-[8px] border-white h-[324px] object-cover object-left-top right-0 top-[250px]"
                alt=""
                src="/vikava/service100.jpg"
              />
            </div>
          </div>
        </div>

        {/* MOBILE SECTION 9 - Couture Commerce */}
        <div className="h-[48rem] w-screen flex justify-center items-center bg-[#E8E4DF]">
          <div className="w-full flex flex-col justify-start relative h-full pt-[6rem]">
            <div className="flex px-10 py-6 flex-col justify-start">
              <div className="px-5 py-10 relative">
                <h1 className="barlow-400 absolute -left-0 font-bold top-6 text-[#3C3936]">
                  [9]
                </h1>

                <h1 className="geist-bold text-[#3C3936] text-[24px] flex-col flex font-normal leading-[30px] text-left">
                  Couture & Designer Commerce
                </h1>

                <p className="text-[13px] geist-medium font-normal text-[#3C3936] leading-4 tracking-[-0.03em] text-left py-3">
                  A tech-enabled operating layer for Indian couture—connecting
                  designers, stores, and buyers through structured commerce.
                </p>

                <p
                  className="barlow-400 text-[13px] font-medium text-[#3C3936] leading-4 tracking-[1px] text-left py-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  भारतीय कुट्योर के लिए टेक-सक्षम इन्फ्रास्ट्रक्चर-डिज़ाइनर्स,
                  स्टोर्स और खरीदारों को जोड़ता हुआ।
                </p>

                <p className="relative group cursor-pointer w-fit my-4">
                  <Link href="/ifx">
                    {" "}
                    <span className="text-[15px] geist-bold tracking-[0.5px] text-[#3C3936]">
                      <u>Go to IFX</u>
                    </span>{" "}
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex px-5 py-6 flex-col justify-start">
              <img
                width="1500"
                height="1500"
                className="absolute w-[50%] h-auto object-cover object-left-top right-0 bottom-0"
                alt=""
                src="/vikava/service111.avif"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
