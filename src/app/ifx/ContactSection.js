"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    companyName: "",
    youAre: "",
    primaryIntent: [],
    briefNote: "",
    consent: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const toggleIntent = (option) => {
    setFormData((prev) => ({
      ...prev,
      primaryIntent: prev.primaryIntent.includes(option)
        ? prev.primaryIntent.filter((item) => item !== option)
        : [...prev.primaryIntent, option],
    }));
  };

  const removeIntent = (option) => {
    setFormData((prev) => ({
      ...prev,
      primaryIntent: prev.primaryIntent.filter((item) => item !== option),
    }));
  };

  const intentOptions = [
    "I want to understand how Vikava Labs works",
    "Business strategy / advisory",
    "Branding / design / marketing",
    "E-commerce / sales systems",
    "Apparel & textile solutions",
    "Design Library of India (DLI)",
    "IFX – Couture Commerce",
    "Vikava WhatsApp Community",
    "Collaboration / partnership",
    "Careers / work with Vikava Labs",
    "Not sure yet / need guidance",
  ];

  return (
    <section className="relative bg-[#D9D4D0]">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left - Video Section */}
        <div className="relative h-[50vh] lg:h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/ifx/contact1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right - Form Section */}
        <div className="relative px-4 md:px-8 lg:px-12 xl:px-14 py-8 md:py-12 lg:py-16 flex flex-col justify-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8 lg:mb-10"
          >
            <h2
              className="garamond-400 text-[#1b1c18] leading-tight mb-2"
              style={{
                fontSize: "clamp(24px, 3vw, 48px)",
              }}
            >
              IFX – Expression of Interest
            </h2>
            <p
              className="mont-400 text-[#2B2420]/70"
              style={{
                fontSize: "clamp(12px, 0.95vw, 15px)",
              }}
            >
              IFX is a curated couture commerce ecosystem. Share a few details to explore alignment.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-3 lg:space-y-4"
          >
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] placeholder:text-[#2B2420]/60 focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm"
                style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] placeholder:text-[#2B2420]/60 focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm"
                style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
              />
            </div>

            {/* WhatsApp Number */}
            <div className="relative">
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] placeholder:text-[#2B2420]/60 focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm"
                style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
              />
            </div>

            {/* Company / Brand / Store / Studio Name */}
            <div className="relative">
              <input
                type="text"
                name="companyName"
                placeholder="Company / Brand / Store / Studio Name"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] placeholder:text-[#2B2420]/60 focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm"
                style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
              />
            </div>

            {/* You Are - Dropdown */}
            <div className="relative">
              <select
                name="youAre"
                value={formData.youAre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm appearance-none cursor-pointer [&>option]:bg-white [&>option]:text-[#2B2420]"
                style={{
                  fontSize: "clamp(13px, 1vw, 16px)",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232B2420' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                <option value="" disabled className="bg-white text-[#2B2420]">
                  You Are
                </option>
                <option value="couture-designer" className="bg-white text-[#2B2420]">
                  Couture Designer / Label
                </option>
                <option value="multi-designer-store" className="bg-white text-[#2B2420]">
                  Multi-Designer Store
                </option>
                <option value="buyer-retailer" className="bg-white text-[#2B2420]">
                  Buyer / Retailer
                </option>
                <option value="service-provider" className="bg-white text-[#2B2420]">
                  Service Provider
                </option>
                <option value="other" className="bg-white text-[#2B2420]">
                  Other
                </option>
              </select>
            </div>

            {/* Primary Intent - Multi-select Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full min-h-[42px] lg:min-h-[48px] px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] cursor-pointer focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232B2420' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                {formData.primaryIntent.length === 0 ? (
                  <span
                    className="text-[#2B2420]/60"
                    style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
                  >
                    Primary intent with IFX
                  </span>
                ) : (
                  <div className="flex flex-wrap gap-1.5 pr-8">
                    {formData.primaryIntent.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 bg-[#2B2420] text-white px-2 py-0.5 rounded-sm mont-400"
                        style={{ fontSize: "clamp(11px, 0.9vw, 13px)" }}
                      >
                        {item}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeIntent(item);
                          }}
                          className="hover:text-red-300 text-base leading-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#D9D4D0] border border-[#2B2420]/20 rounded-sm shadow-lg max-h-64 overflow-y-auto">
                  {intentOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-4 py-2.5 hover:bg-[#cac5c0] cursor-pointer mont-400 text-[#2B2420] transition-colors"
                      style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.primaryIntent.includes(option)}
                        onChange={() => toggleIntent(option)}
                        className="mr-2.5 w-4 h-4 rounded-sm border-[#2B2420]/30 text-[#2B2420] focus:ring-[#2B2420] focus:ring-offset-0 cursor-pointer accent-[#2B2420]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Brief Note */}
            <div className="relative">
              <textarea
                name="briefNote"
                placeholder="Anything specific you'd like IFX to understand?"
                value={formData.briefNote}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2.5 lg:py-3 bg-[#D9D4D0] backdrop-blur-sm border border-[#2B2420]/20 mont-400 text-[#2B2420] placeholder:text-[#2B2420]/60 focus:outline-none focus:border-[#2B2420]/90 focus:bg-[#D9D4D0] transition-all rounded-sm resize-none"
                style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 rounded-sm border-[#2B2420]/30 text-[#2B2420] focus:ring-[#2B2420] focus:ring-offset-0 cursor-pointer accent-[#2B2420]"
              />
              <label
                htmlFor="consent"
                className="mont-400 text-[#2B2420]/80 cursor-pointer leading-relaxed"
                style={{ fontSize: "clamp(11px, 0.9vw, 14px)" }}
              >
                I consent to my details being stored and used in accordance.
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-[#2B2420] text-white py-3 lg:py-4 px-8 mont-500 transition-all duration-300 hover:bg-[#1a1410] mt-4 lg:mt-6 rounded-sm"
              style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
            >
              Submit Expression of Interest
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
