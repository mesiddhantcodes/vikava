"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    exploring: [],
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Phone validation (optional but must be valid if provided)
    if (form.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(form.phone) || form.phone.trim().length < 10) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Message validation

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setShowSuccessModal(true);

      // Reset form
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        exploring: [],
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 rounded-lg bg-[#F3F0EB] border border-[#abaaac] px-5 sm:px-6 md:px-8 py-6 md:py-8">
        {/* Title */}
        <h2 className="text-[24px] sm:text-[32px] md:text-[38px] geist-bold text-[#201f24] leading-tight">
          Let’s Start a Conversation{" "}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[16px] sm:text-[18px] geist-bold leading-relaxed text-[#201f24]">
          Share your questions, thoughts, or ideas—we&apos;re here to help and
          ready to listen.
        </p>

        <form className="mt-6 md:mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Row 1: Name / Company */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[14px] geist-bold font-semibold text-[#27252E]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-[10px] border ${errors.name ? "border-red-500" : "border-[#abaaac]"
                  } bg-[#F3F0EB] px-3 py-2 text-[15px] text-[#16161A] placeholder:text-[12px] placeholder:text-[#9D9689] focus:outline-none focus:ring-1 ${errors.name ? "focus:ring-red-500" : "focus:ring-[#15151B]"
                  }`}
                placeholder="Jane Smith"
              />
              {errors.name && (
                <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-[14px] geist-bold font-semibold text-[#27252E]">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="mt-2 w-full rounded-[10px] border border-[#abaaac] bg-[#F3F0EB] px-3 py-2 text-[15px] text-[#16161A] placeholder:text-[12px] placeholder:text-[#9D9689] focus:outline-none focus:ring-1 focus:ring-[#15151B]"
                placeholder="Nexilo"
              />
            </div>
          </div>

          {/* Row 2: Email / Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[14px] geist-bold text-[#27252E]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-[10px] border ${errors.email ? "border-red-500" : "border-[#abaaac]"
                  } bg-[#F3F0EB] px-3 py-2 text-[14px] text-[#16161A] placeholder:text-[12px] placeholder:text-[#9D9689] focus:outline-none focus:ring-1 ${errors.email ? "focus:ring-red-500" : "focus:ring-[#15151B]"
                  }`}
                placeholder="jane@framer.com"
              />
              {errors.email && (
                <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-[14px] geist-bold text-[#27252E]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`mt-2 w-full rounded-[10px] border ${errors.phone ? "border-red-500" : "border-[#abaaac]"
                  } bg-[#F3F0EB] px-3 py-2 text-[14px] text-[#16161A] placeholder:text-[12px] placeholder:text-[#9D9689] focus:outline-none focus:ring-1 ${errors.phone ? "focus:ring-red-500" : "focus:ring-[#15151B]"
                  }`}
                placeholder="+1 (777) 123-7366"
              />
              {errors.phone && (
                <p className="mt-1 text-[12px] text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Service select */}
          <div>
            <label className="block text-[14px] geist-bold text-[#27252E]">
              You Are<span className="text-red-500">*</span>
            </label>
            <div className="mt-2 relative">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full h-10 rounded-[10px] border border-[#abaaac] bg-[#F3F0EB] px-3 pr-8 text-[14px] text-[#16161A] appearance-none focus:outline-none focus:ring-1 focus:ring-[#15151B]"
              >
                <option value="" className="text-[#777]" disabled>
                  Select Service
                </option>
                <option> D2C Brand Founder</option>
                <option>B2B Business Owner</option>

                <option>Textile & Apparels Exporter</option>

                <option>Textile & Raw Materials Supplier/ Manufacturer</option>

                <option>Investor / VC</option>

                <option>Professional / Agency / Freelancer</option>

                <option>Student / Learner</option>

                <option>Press / Media</option>

                <option>Others</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777] pointer-events-none">
                <ChevronDown />
              </span>
            </div>
          </div>
          <div>
            <label className="block z-110 text-[14px] geist-bold text-[#27252E]">
              What are you exploring?
            </label>
            <div className="mt-2 relative" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full min-h-10 rounded-[10px] border border-[#abaaac] bg-[#F3F0EB] px-3 py-2 text-[14px] text-[#16161A] cursor-pointer focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15151B]"
              >
                {form.exploring.length === 0 ? (
                  <span className="text-[#777]">Select options</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {form.exploring.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-[#27252E] text-white px-2 py-0.5 rounded-md text-[13px]"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setForm({
                              ...form,
                              exploring: form.exploring.filter(
                                (_, i) => i !== index,
                              ),
                            });
                          }}
                          className="hover:text-red-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777] pointer-events-none">
                <ChevronDown />
              </span>

              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#F3F0EB] border border-[#abaaac] rounded-[10px] shadow-lg max-h-60 overflow-y-auto">
                  {[
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
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-3 py-2.5 hover:bg-[#e5e1d8] cursor-pointer text-[14px] text-[#16161A]"
                    >
                      <input
                        type="checkbox"
                        checked={form.exploring.includes(option)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setForm((prev) => ({
                              ...prev,
                              exploring: [...prev.exploring, option],
                            }));
                          } else {
                            setForm((prev) => ({
                              ...prev,
                              exploring: prev.exploring.filter(
                                (item) => item !== option,
                              ),
                            }));
                          }
                        }}
                        className="mr-2.5 w-4 h-4 accent-[#27252E]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[14px] geist-bold font-semibold text-[#27252E]">
              Brief Context
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`mt-2 w-full rounded-[10px] border ${errors.message ? "border-red-500" : "border-[#abaaac]"
                } bg-[#F3F0EB] px-3 py-2 text-[14px] text-[#16161A] placeholder:text-[12px] placeholder:text-[#9D9689] focus:outline-none focus:ring-1 ${errors.message ? "focus:ring-red-500" : "focus:ring-[#15151B]"
                } resize-none`}
              placeholder="Anything you’d like us to know"
            />
            {errors.message && (
              <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3 items-start justify-start">
            <motion.button
              type="submit"
              disabled={loading}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative bg-[#F3F0EB] geist-medium rounded-full px-4 py-2 flex items-center text-black text-[14px] sm:text-[16px] overflow-hidden hover:border-[#15151B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* TEXT visible */}
              <motion.span
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 80, opacity: 0 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="relative  whitespace-nowrap"
              >
                {loading ? "Sending..." : "Submit"}
              </motion.span>

              {/* TEXT on hover */}
              <motion.span
                variants={{
                  rest: { y: -80, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="absolute left-4 sm:left-6 z-0 whitespace-nowrap"
              >
                {loading ? "Sending..." : "Submit"}
              </motion.span>

              {/* ARROW */}
              <span className="ml-3 sm:ml-4 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] text-[18px] sm:text-[20px] rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden flex-shrink-0">
                <motion.span
                  variants={{
                    rest: { x: -80, opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute"
                >
                  →
                </motion.span>

                <motion.span
                  variants={{
                    rest: { x: 0, opacity: 1 },
                    hover: { x: 80, opacity: 0 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            <p className="text-[12px] text-[#201f24]/60 geist-medium">
              By clicking submit, you agree to our{" "}
              <a href="/terms-and-condition" className="underline hover:text-[#201f24]">
                Terms & Conditions
              </a>
              ,{" "}
              <a href="/privacy-policy" className="underline hover:text-[#201f24]">
                Privacy Policy
              </a>
              , and{" "}
              <a href="/legal-disclaimer" className="underline hover:text-[#201f24]">
                Legal Disclaimer
              </a>
              .
            </p>
          </div>
        </form>
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default ContactForm;
