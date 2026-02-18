"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

// Image data with categories
const PORTFOLIO_IMAGES = {
  all: {
    left: [
      {
        src: "/vikava/vl1.jpg",
        description: "Brand identity and logo design",
        category: "photography",
      },
      {
        src: "/vikava/vl4.jpg",
        description: "Art-led product storytelling photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl7.jpg",
        description: "Lifestyle product photoshoot by our team",
        category: "photography",
      },
      {
        src: "/vikava/vl10.jpeg",
        description: "Lifestyle mask shoot executed in-house",
        category: "photography",
      },
      {
        src: "/vikava/vl13.jpeg",
        description: "Cultural editorial photoshoot crafted in-house",
        category: "photography",
      },
      {
        src: "/vikava/vl16.jpeg",
        description: "Heritage silhouettes, modern masked styling",
        category: "photography",
      },
      {
        src: "/vikava/vl19.jpg",
        description: "Minimal product styling with earthy tones",
        category: "photography",
      },
      {
        src: "/vikava/vl22.jpg",
        description: "Minimal product photoshoot, warm aesthetics",
        category: "photography",
      },
      {
        src: "/vikava/vl25.png",
        description: "Festive product photoshoot, artisanal mood",
        category: "photography",
      },
      {
        src: "/vikava/vl28.png",
        description: "Handcrafted candle photoshoot, detail focused",
        category: "photography",
      },
      {
        src: "/vikava/vl31.jpg",
        description: "Commercial Shoot",
        category: "photography",
      },
      {
        src: "/vikava/vl34.png",
        description: "Snack packaging design visualization",
        category: "photography",
      },
      {
        src: "/vikava/vl37.png",
        description: "Retail packaging design and layout",
        category: "photography",
      },
      {
        src: "/vikava/dl/1.png",
        description: "Bold sculpted bag with brald",
        category: "branding",
      },
      {
        src: "/vikava/dl/4.png",
        description: "High-illustrated floral heel concept",
        category: "branding",
      },

      {
        src: "/vikava/dl/10.png",
        description: "Botanical illustration graphic t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/13.png",
        description: "Typographic graphic design t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/16.png",
        description: "Low-top sneaker design illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/19.png",
        description: "Girlswear plaid co-Ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/22.png",
        description: "Printed camisole co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/25.png",
        description: "Tiered striped dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/28.png",
        description: "Off-shoulder floral midi illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/31.png",
        description: "Embellished lehenga set illustration",
        category: "branding",
      },
      // 15 images (1-15)    { src: "/vikava/all28.png", description: "UX Research", category: "web" },
      {
        src: "/vikava/all31.png",
        description: "Instagram luxury candle storytelling post",
        category: "design",
      },
      {
        src: "/vikava/all34.png",
        description: "Soft illustrations encouraging family bonding",
        category: "photography",
      },
      {
        src: "/vikava/all37.png",
        description: "Instagram collaboration announcement graphic",
        category: "branding",
      },
      {
        src: "/vikava/all40.png",
        description: "Instagram festive product moodboard post",
        category: "web",
      },
      {
        src: "/vikava/all43.png",
        description: "Business growth magazine advertisement design",
        category: "design",
      },
      {
        src: "/vikava/all1.png",
        description: "Instagram lifestyle post creative",
        category: "branding",
      },
      {
        src: "/vikava/all4.png",
        description: "A+ product benefits explainer section",
        category: "photography",
      },
      {
        src: "/vikava/all7.png",
        description: "A+ content – product concept introduction",
        category: "design",
      },
      {
        src: "/vikava/all10.png",
        description: "Website Diwali campaign banner creative",
        category: "branding",
      },
      {
        src: "/vikava/all13.png",
        description: "Festive brand greeting digital poster",
        category: "web",
      },
      {
        src: "/vikava/all16.png",
        description: "Instagram lifestyle content mockup post",
        category: "design",
      },
      {
        src: "/vikava/all19.png",
        description: "Bold color disrupting minimal landscapes",
        category: "photography",
      },
      {
        src: "/vikava/all22.png",
        description: "Clean composition highlighting active elegance",
        category: "branding",
      },
      {
        src: "/vikava/all25.png",
        description: "Framed motion emphasizing form and function",
        category: "branding",
      },
    ],
    middle: [
      {
        src: "/vikava/vl2.jpg",
        description: "End-to-end packaging and tag design",
        category: "photography",
      },
      {
        src: "/vikava/vl5.jpg",
        description: "Conceptual fashion photoshoot, styled and shot",
        category: "photography",
      },
      {
        src: "/vikava/vl8.jpg",
        description: "Ecommerce Product",
        category: "photography",
      },
      {
        src: "/vikava/vl11.jpeg",
        description: "Conceptual fashion photoshoot, styled and shot",
        category: "photography",
      },
      {
        src: "/vikava/vl14.jpeg",
        description: "On-location cultural storytelling photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl17.jpeg",
        description: "Urban elegance with everyday protection",
        category: "photography",
      },
      {
        src: "/vikava/vl20.jpg",
        description: "Handcrafted candles, calm visual storytelling",
        category: "photography",
      },
      {
        src: "/vikava/vl23.png",
        description: "Brand logo reveal for Hue & Hide",
        category: "photography",
      },
      {
        src: "/vikava/vl26.png",
        description: "Concept-led lifestyle candle photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl29.png",
        description: "Floral candle photoshoot, soft lighting",
        category: "photography",
      },
      {
        src: "/vikava/vl32.png",
        description: "Brand tag design for textile collection",
        category: "photography",
      },
      {
        src: "/vikava/vl35.png",
        description: "Fresh produce brand identity logo",
        category: "photography",
      },
      {
        src: "/vikava/vl38.png",
        description: "Clean, shelf-ready packaging design",
        category: "photography",
      },
      {
        src: "/vikava/dl/2.png",
        description: "High-jewellery emerald necklace sketch",
        category: "branding",
      },
      {
        src: "/vikava/dl/5.png",
        description: "Black & gold stlletto",
        category: "branding",
      },
      {
        src: "/vikava/dl/8.png",
        description: "Structured spherical backpack illustration ",
        category: "branding",
      },
      {
        src: "/vikava/dl/11.png",
        description: "Typographic graphic t-shirt design",
        category: "branding",
      },
      {
        src: "/vikava/dl/14.png",
        description: "Luxury hobo handbag illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/17.png",
        description: "Striped peplum co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/20.png",
        description: "Embroidered peplum co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/23.png",
        description: "Striped peplum top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/26.png",
        description: "Textured knit co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/29.png",
        description: "Premium low-top sneaker illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/32.png",
        description: "Embellished lehenga set illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/35.png",
        description: "Off-shoulder co-ord dress illustration",
        category: "branding",
      },
      // 15 images (2-18, 26-30, 32-33, 35-36, 38-39, 41-42, 44-45)
      {
        src: "/vikava/all2.png",
        description: "Instagram handcrafted mask promotion creative",
        category: "design",
      },
      {
        src: "/vikava/all5.png",
        description: "Instagram handcrafted mask promotion creative",
        category: "design",
      },
      {
        src: "/vikava/all8.png",
        description: "A+ content – product feature storytelling",
        category: "photography",
      },
      {
        src: "/vikava/all11.png",
        description: "Website UI showcasing bold product storytelling",
        category: "design",
      },
      {
        src: "/vikava/all14.png",
        description: "Fashion campaign website hero banner",
        category: "web",
      },
      {
        src: "/vikava/all17.png",
        description: "Instagram digital services promotion creative",
        category: "photography",
      },
      {
        src: "/vikava/all20.png",
        description: "Minimal editorial website highlighting craftsmanship",
        category: "design",
      },
      {
        src: "/vikava/all23.png",
        description: "Minimal styling meets premium athleisure design",
        category: "branding",
      },
      {
        src: "/vikava/all26.png",
        description: "Luxury e-commerce website with heritage aesthetics",
        category: "design",
      },
      {
        src: "/vikava/all27.png",
        description: "Elegant wedding website with narrative-led design",
        category: "photography",
      },
      {
        src: "/vikava/all29.png",
        description: "Instagram fashion brand campaign post",
        category: "web",
      },
      {
        src: "/vikava/all30.png",
        description: "Conceptual social media creative with bold contrast",
        category: "branding",
      },
      {
        src: "/vikava/all32.png",
        description: "Festive symbolism with contemporary design",
        category: "design",
      },
      {
        src: "/vikava/all33.png",
        description: "Playful visuals for modern parenting",
        category: "photography",
      },
      {
        src: "/vikava/all35.png",
        description: "Warm, minimal framing for luxury products",
        category: "web",
      },
    ],
    right: [
      {
        src: "/vikava/vl3.jpg",
        description: "Packaging design with lifestyle photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl6.jpg",
        description: "Beauty Photography",
        category: "photography",
      },
      {
        src: "/vikava/vl9.jpg",
        description: "Mood-driven brand photoshoot styling",
        category: "photography",
      },
      {
        src: "/vikava/vl12.jpeg",
        description: "Concept-driven outdoor photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl15.jpeg",
        description: "Ethnic photoshoot with modern styling",
        category: "photography",
      },
      {
        src: "/vikava/vl18.jpeg",
        description: "Contemporary ethnic wear, functional fashion",
        category: "photography",
      },
      {
        src: "/vikava/vl21.jpg",
        description: "Lifestyle photoshoot with handcrafted candles",
        category: "photography",
      },
      {
        src: "/vikava/vl24.jpg",
        description: "IFX logo exploration, bold identity",
        category: "photography",
      },
      {
        src: "/vikava/vl27.png",
        description: "Moody product styling with textures",
        category: "photography",
      },
      {
        src: "/vikava/vl30.png",
        description: "Artisanal product photoshoot with mood lighting",
        category: "photography",
      },
      {
        src: "/vikava/vl33.png",
        description: "Art-inspired garment tag design system",
        category: "photography",
      },
      {
        src: "/vikava/vl36.png",
        description: "Premium spread jar product shoot",
        category: "photography",
      },
      {
        src: "/vikava/vl39.png",
        description: "	Brand packaging system development",
        category: "photography",
      },
      {
        src: "/vikava/vl40.png",
        description: "Product packaging designed for shelf impact",
        category: "photography",
      },
      {
        src: "/vikava/dl/3.png",
        description: "High-jewellery gemstone pendant illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/6.png",
        description: "Structured backpack design line illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/9.png",
        description: "Graphic slogan t-shirt design mockup ",
        category: "branding",
      },
      {
        src: "/vikava/dl/12.png",
        description: "Conceptual graphic illustration t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/15.png",
        description: "Luxury cylindrical handbag illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/18.png",
        description: "Playful printed girls dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/21.png",
        description: "Floral corset top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/24.png",
        description: "Monochrome striped fit-and-flare illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/27.png",
        description: "Geometric crochet slip dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/30.png",
        description: "Crochet lace top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/33.png",
        description: "Bridal lehenga ensemble illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/34.png",
        description: "Embroidered couture pantsuit illustration",
        category: "branding",
      },
      // 15 images (3,6,9,12,15,18,21,24,36,39,42,44,45 + 2 more)
      {
        src: "/vikava/all3.png",
        description: "UX Case Study",
        category: "web",
      },
      {
        src: "/vikava/all6.png",
        description: "Digital brochure – corporate brand overview",
        category: "branding",
      },
      {
        src: "/vikava/all9.png",
        description: "A+ content – illustrated story showcase",
        category: "design",
      },
      {
        src: "/vikava/all12.png",
        description: "Digital brochure – business event promotion",
        category: "branding",
      },
      {
        src: "/vikava/all15.png",
        description: "Instagram brand awareness visual post",
        category: "web",
      },
      {
        src: "/vikava/all18.png",
        description: "Instagram product feature showcase post",
        category: "branding",
      },
      {
        src: "/vikava/all21.png",
        description: "Handcrafted luxury through texture and detail",
        category: "design",
      },
      {
        src: "/vikava/all24.png",
        description: "Multi-angle layout showcasing sculpted comfort",
        category: "photography",
      },
      {
        src: "/vikava/all36.png",
        description: "Instagram romantic storytelling visual post",
        category: "branding",
      },
      {
        src: "/vikava/all39.png",
        description: "Typography-led commentary on cultural gaps",
        category: "web",
      },
      {
        src: "/vikava/all42.png",
        description: "Athleisure lifestyle post showcasing movement",
        category: "design",
      },
      {
        src: "/vikava/all44.png",
        description: "Instagram product awareness post creative",
        category: "photography",
      },
      {
        src: "/vikava/all45.jpg",
        description: "A+ usage and functionality infographic",
        category: "web",
      },
      {
        src: "/vikava/all38.png",
        description: "Instagram illustrated parenting awareness post",
        category: "design",
      },
      {
        src: "/vikava/all41.png",
        description: "Carousel layout showcasing fit and movement",
        category: "branding",
      },
    ],
  },
  branding: {
    left: [
      {
        src: "/vikava/dl/1.png",
        description: "Bold sculpted bag with brald",
        category: "branding",
      },
      {
        src: "/vikava/dl/4.png",
        description: "High-illustrated floral heel concept",
        category: "branding",
      },

      {
        src: "/vikava/dl/10.png",
        description: "	Botanical illustration graphic t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/13.png",
        description: "Typographic graphic design t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/16.png",
        description: "Low-top sneaker design illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/19.png",
        description: "Girlswear plaid co-Ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/22.png",
        description: "Printed camisole co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/25.png",
        description: "Tiered striped dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/28.png",
        description: "Off-shoulder floral midi illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/31.png",
        description: "Embellished lehenga set illustration",
        category: "branding",
      },
    ],
    middle: [
      // Images 2,5,8,11,14,17,20,23,26,29,32,35
      {
        src: "/vikava/dl/2.png",
        description: "High-jewellery emerald necklace sketch",
        category: "branding",
      },
      {
        src: "/vikava/dl/5.png",
        description: "Black & gold stlletto",
        category: "branding",
      },
      {
        src: "/vikava/dl/8.png",
        description: "Structured spherical backpack illustration ",
        category: "branding",
      },
      {
        src: "/vikava/dl/11.png",
        description: "Typographic graphic t-shirt design",
        category: "branding",
      },
      {
        src: "/vikava/dl/14.png",
        description: "Luxury hobo handbag illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/17.png",
        description: "Striped peplum co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/20.png",
        description: "Embroidered peplum co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/23.png",
        description: "Striped peplum top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/26.png",
        description: "Textured knit co-ord illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/29.png",
        description: "Premium low-top sneaker illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/32.png",
        description: "Embellished lehenga set illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/35.png",
        description: "Off-shoulder co-ord dress illustration",
        category: "branding",
      },
    ],
    right: [
      // Images 3,6,9,12,15,18,21,24,27,30,33
      {
        src: "/vikava/dl/3.png",
        description: "High-jewellery gemstone pendant illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/6.png",
        description: "Structured backpack design line illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/9.png",
        description: "Graphic slogan t-shirt design mockup ",
        category: "branding",
      },
      {
        src: "/vikava/dl/12.png",
        description: "Conceptual graphic illustration t-shirt",
        category: "branding",
      },
      {
        src: "/vikava/dl/15.png",
        description: "Luxury cylindrical handbag illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/18.png",
        description: "Playful printed girls dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/21.png",
        description: "Floral corset top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/24.png",
        description: "Monochrome striped fit-and-flare illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/27.png",
        description: "Geometric crochet slip dress illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/30.png",
        description: "Crochet lace top illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/33.png",
        description: "Bridal lehenga ensemble illustration",
        category: "branding",
      },
      {
        src: "/vikava/dl/34.png",
        description: "Embroidered couture pantsuit illustration",
        category: "branding",
      },
    ],
  },
  photography: {
    left: [
      {
        src: "/vikava/vl1.jpg",
        description: "Brand identity and logo design",
        category: "photography",
      },
      {
        src: "/vikava/vl4.jpg",
        description: "Art-led product storytelling photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl7.jpg",
        description: "Lifestyle product photoshoot by our team",
        category: "photography",
      },
      {
        src: "/vikava/vl10.jpeg",
        description: "Lifestyle mask shoot executed in-house",
        category: "photography",
      },
      {
        src: "/vikava/vl13.jpeg",
        description: "Cultural editorial photoshoot crafted in-house",
        category: "photography",
      },
      {
        src: "/vikava/vl16.jpeg",
        description: "Heritage silhouettes, modern masked styling",
        category: "photography",
      },
      {
        src: "/vikava/vl19.jpg",
        description: "Minimal product styling with earthy tones",
        category: "photography",
      },
      {
        src: "/vikava/vl22.jpg",
        description: "Minimal product photoshoot, warm aesthetics",
        category: "photography",
      },
      {
        src: "/vikava/vl25.png",
        description: "Festive product photoshoot, artisanal mood",
        category: "photography",
      },
      {
        src: "/vikava/vl28.png",
        description: "Handcrafted candle photoshoot, detail focused",
        category: "photography",
      },
      {
        src: "/vikava/vl31.jpg",
        description: "Commercial Shoot",
        category: "photography",
      },
      {
        src: "/vikava/vl34.png",
        description: "Snack packaging design visualization",
        category: "photography",
      },
      {
        src: "/vikava/vl37.png",
        description: "Retail packaging design and layout",
        category: "photography",
      },
    ],
    middle: [
      // Images vl2, vl5, vl8, vl11, vl14, vl17, vl20, vl23, vl26, vl29, vl32, vl35, vl38
      {
        src: "/vikava/vl2.jpg",
        description: "End-to-end packaging and tag design",
        category: "photography",
      },
      {
        src: "/vikava/vl5.jpg",
        description: "Conceptual fashion photoshoot, styled and shot",
        category: "photography",
      },
      {
        src: "/vikava/vl8.jpg",
        description: "Ecommerce Product",
        category: "photography",
      },
      {
        src: "/vikava/vl11.jpeg",
        description: "Conceptual fashion photoshoot, styled and shot",
        category: "photography",
      },
      {
        src: "/vikava/vl14.jpeg",
        description: "On-location cultural storytelling photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl17.jpeg",
        description: "Urban elegance with everyday protection",
        category: "photography",
      },
      {
        src: "/vikava/vl20.jpg",
        description: "Handcrafted candles, calm visual storytelling",
        category: "photography",
      },
      {
        src: "/vikava/vl23.png",
        description: "Brand logo reveal for Hue & Hide",
        category: "photography",
      },
      {
        src: "/vikava/vl26.png",
        description: "Concept-led lifestyle candle photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl29.png",
        description: "Floral candle photoshoot, soft lighting",
        category: "photography",
      },
      {
        src: "/vikava/vl32.png",
        description: "Brand tag design for textile collection",
        category: "photography",
      },
      {
        src: "/vikava/vl35.png",
        description: "Fresh produce brand identity logo",
        category: "photography",
      },
      {
        src: "/vikava/vl38.png",
        description: "Clean, shelf-ready packaging design",
        category: "photography",
      },
    ],
    right: [
      {
        src: "/vikava/vl3.jpg",
        description: "Packaging design with lifestyle photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl6.jpg",
        description: "Beauty Photography",
        category: "photography",
      },
      {
        src: "/vikava/vl9.jpg",
        description: "Mood-driven brand photoshoot styling",
        category: "photography",
      },
      {
        src: "/vikava/vl12.jpeg",
        description: "Concept-driven outdoor photoshoot",
        category: "photography",
      },
      {
        src: "/vikava/vl15.jpeg",
        description: "Ethnic photoshoot with modern styling",
        category: "photography",
      },
      {
        src: "/vikava/vl18.jpeg",
        description: "Contemporary ethnic wear, functional fashion",
        category: "photography",
      },
      {
        src: "/vikava/vl21.jpg",
        description: "Lifestyle photoshoot with handcrafted candles",
        category: "photography",
      },
      {
        src: "/vikava/vl24.jpg",
        description: "IFX logo exploration, bold identity",
        category: "photography",
      },
      {
        src: "/vikava/vl27.png",
        description: "Moody product styling with textures",
        category: "photography",
      },
      {
        src: "/vikava/vl30.png",
        description: "Artisanal product photoshoot with mood lighting",
        category: "photography",
      },
      {
        src: "/vikava/vl33.png",
        description: "Art-inspired garment tag design system",
        category: "photography",
      },
      {
        src: "/vikava/vl36.png",
        description: "Premium spread jar product shoot",
        category: "photography",
      },
      {
        src: "/vikava/vl39.png",
        description: "	Brand packaging system development",
        category: "photography",
      },
      {
        src: "/vikava/vl40.png",
        description: "Product packaging designed for shelf impact",
        category: "photography",
      },
    ],
  },
  design: {
    left: [
      // 15 images (1-15)    { src: "/vikava/all28.png", description: "UX Research", category: "web" },
      {
        src: "/vikava/all31.png",
        description: "Instagram luxury candle storytelling post",
        category: "design",
      },
      {
        src: "/vikava/all34.png",
        description: "Soft illustrations encouraging family bonding",
        category: "photography",
      },
      {
        src: "/vikava/all37.png",
        description: "Instagram collaboration announcement graphic",
        category: "branding",
      },
      {
        src: "/vikava/all40.png",
        description: "Instagram festive product moodboard post",
        category: "web",
      },
      {
        src: "/vikava/all43.png",
        description: "Business growth magazine advertisement design",
        category: "design",
      },
      {
        src: "/vikava/all1.png",
        description: "Instagram lifestyle post creative",
        category: "branding",
      },
      {
        src: "/vikava/all4.png",
        description: "A+ product benefits explainer section",
        category: "photography",
      },
      {
        src: "/vikava/all7.png",
        description: "A+ content – product concept introduction",
        category: "design",
      },
      {
        src: "/vikava/all10.png",
        description: "Website Diwali campaign banner creative",
        category: "branding",
      },
      {
        src: "/vikava/all13.png",
        description: "Festive brand greeting digital poster",
        category: "web",
      },
      {
        src: "/vikava/all16.png",
        description: "Instagram lifestyle content mockup post",
        category: "design",
      },
      {
        src: "/vikava/all19.png",
        description: "Bold color disrupting minimal landscapes",
        category: "photography",
      },
      {
        src: "/vikava/all22.png",
        description: "Clean composition highlighting active elegance",
        category: "branding",
      },
      {
        src: "/vikava/all25.png",
        description: "Framed motion emphasizing form and function",
        category: "branding",
      },
    ],
    middle: [
      // 15 images (2-18, 26-30, 32-33, 35-36, 38-39, 41-42, 44-45)
      {
        src: "/vikava/all2.png",
        description: "Instagram handcrafted mask promotion creative",
        category: "design",
      },
      {
        src: "/vikava/all5.png",
        description: "Instagram handcrafted mask promotion creative",
        category: "design",
      },
      {
        src: "/vikava/all8.png",
        description: "A+ content – product feature storytelling",
        category: "photography",
      },
      {
        src: "/vikava/all11.png",
        description: "Website UI showcasing bold product storytelling",
        category: "design",
      },
      {
        src: "/vikava/all14.png",
        description: "Fashion campaign website hero banner",
        category: "web",
      },
      {
        src: "/vikava/all17.png",
        description: "Instagram digital services promotion creative",
        category: "photography",
      },
      {
        src: "/vikava/all20.png",
        description: "Minimal editorial website highlighting craftsmanship",
        category: "design",
      },
      {
        src: "/vikava/all23.png",
        description: "Minimal styling meets premium athleisure design",
        category: "branding",
      },
      {
        src: "/vikava/all26.png",
        description: "Luxury e-commerce website with heritage aesthetics",
        category: "design",
      },
      {
        src: "/vikava/all27.png",
        description: "Elegant wedding website with narrative-led design",
        category: "photography",
      },
      {
        src: "/vikava/all29.png",
        description: "Instagram fashion brand campaign post",
        category: "web",
      },
      {
        src: "/vikava/all30.png",
        description: "Conceptual social media creative with bold contrast",
        category: "branding",
      },
      {
        src: "/vikava/all32.png",
        description: "Festive symbolism with contemporary design",
        category: "design",
      },
      {
        src: "/vikava/all33.png",
        description: "Playful visuals for modern parenting",
        category: "photography",
      },
      {
        src: "/vikava/all35.png",
        description: "Warm, minimal framing for luxury products",
        category: "web",
      },
    ],
    right: [
      // 15 images (3,6,9,12,15,18,21,24,36,39,42,44,45 + 2 more)
      {
        src: "/vikava/all3.png",
        description: "UX Case Study",
        category: "web",
      },
      {
        src: "/vikava/all6.png",
        description: "Digital brochure – corporate brand overview",
        category: "branding",
      },
      {
        src: "/vikava/all9.png",
        description: "A+ content – illustrated story showcase",
        category: "design",
      },
      {
        src: "/vikava/all12.png",
        description: "Digital brochure – business event promotion",
        category: "branding",
      },
      {
        src: "/vikava/all15.png",
        description: "Instagram brand awareness visual post",
        category: "web",
      },
      {
        src: "/vikava/all18.png",
        description: "Instagram product feature showcase post",
        category: "branding",
      },
      {
        src: "/vikava/all21.png",
        description: "Handcrafted luxury through texture and detail",
        category: "design",
      },
      {
        src: "/vikava/all24.png",
        description: "Multi-angle layout showcasing sculpted comfort",
        category: "photography",
      },
      {
        src: "/vikava/all36.png",
        description: "Instagram romantic storytelling visual post",
        category: "branding",
      },
      {
        src: "/vikava/all39.png",
        description: "Typography-led commentary on cultural gaps",
        category: "web",
      },
      {
        src: "/vikava/all42.png",
        description: "Athleisure lifestyle post showcasing movement",
        category: "design",
      },
      {
        src: "/vikava/all44.png",
        description: "Instagram product awareness post creative",
        category: "photography",
      },
      {
        src: "/vikava/all45.jpg",
        description: "A+ usage and functionality infographic",
        category: "web",
      },
      {
        src: "/vikava/all38.png",
        description: "Instagram illustrated parenting awareness post",
        category: "design",
      },
      {
        src: "/vikava/all41.png",
        description: "Carousel layout showcasing fit and movement",
        category: "branding",
      },
    ],
  },
};

// Updated tabs to match your design
const TABS = [
  { id: "all", label: "ALL" },
  { id: "branding", label: "Textile & Apparel Product Design" },
  { id: "photography", label: "Branding, Content & Digital Visibility" },
  { id: "design", label: "Creative Design & Visual Identity" },
];

// PortfolioImage component (unchanged)
function PortfolioImage({ src, alt, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={700}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-auto object-cover"
        priority={false}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-4 left-4 text-white z-10"
      >
        <p className="text-[16px] sm:text-[18px] md:text-[20px] geist-medium font-light tracking-wide">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam || "all");
  const [shouldUnstick, setShouldUnstick] = useState(false);
  const middleColumnRef = useRef(null);
  const containerRef = useRef(null);
  const filteredImages = useMemo(() => {
    if (activeTab === "all") return PORTFOLIO_IMAGES.all;

    if (PORTFOLIO_IMAGES[activeTab]) {
      return PORTFOLIO_IMAGES[activeTab];
    }

    return {
      left: PORTFOLIO_IMAGES.all.left.filter(
        (img) => img.category === activeTab,
      ),
      middle: PORTFOLIO_IMAGES.all.middle.filter(
        (img) => img.category === activeTab,
      ),
      right: PORTFOLIO_IMAGES.all.right.filter(
        (img) => img.category === activeTab,
      ),
    };
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (middleColumnRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const middleColumn = middleColumnRef.current;
        const middleColumnHeight = middleColumn.scrollHeight;
        const scrollThreshold = middleColumnHeight;
        const scrolledAmount = Math.abs(containerRect.top);
        const scrolledPast = scrolledAmount > scrollThreshold;
        setShouldUnstick(scrolledPast);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    const timer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#EBE6DF]">
      {/* Updated Tabs - Matches your design */}
      <header
        className="
    sticky top-24
    z-40
    bg-[#EBE6DF]/90
    backdrop-blur-md
  "
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-8 pb-4">
          <div className="flex items-center gap-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (containerRef.current) {
                    const y =
                      containerRef.current.getBoundingClientRect().top +
                      window.scrollY -
                      120; // Adjusted offset for sticky header
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`text-sm md:text-base uppercase tracking-wider geist-medium font-light transition-all duration-300 hover:scale-105 ${activeTab === tab.id
                  ? "text-black font-medium"
                  : "text-[#8B837D] hover:text-black"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LEFT COLUMN */}
          <div
            className={`flex flex-col gap-4 ${shouldUnstick ? "relative" : "relative md:sticky md:top-0"}`}
            style={{ alignSelf: shouldUnstick ? "auto" : "start" }}
          >
            {filteredImages.left.map((item, index) => (
              <PortfolioImage
                key={`left-${activeTab}-${index}`}
                src={item.src}
                alt={`Portfolio left ${index + 1}`}
                description={item.description}
              />
            ))}
          </div>

          {/* MIDDLE COLUMN */}
          <div ref={middleColumnRef} className="flex flex-col gap-4">
            {filteredImages.middle.map((item, index) => (
              <PortfolioImage
                key={`middle-${activeTab}-${index}`}
                src={item.src}
                alt={`Portfolio middle ${index + 1}`}
                description={item.description}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`flex flex-col gap-4 ${shouldUnstick ? "relative" : "relative md:sticky md:top-0"}`}
            style={{ alignSelf: shouldUnstick ? "auto" : "start" }}
          >
            {filteredImages.right.map((item, index) => (
              <PortfolioImage
                key={`right-${activeTab}-${index}`}
                src={item.src}
                alt={`Portfolio right ${index + 1}`}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
