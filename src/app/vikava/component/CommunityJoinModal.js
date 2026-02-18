"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

const ROLES = [
    "D2C Founder - Product Based",
    "B2C Service Focused Business Owner",
    "B2B Product Focused Business Owner",
    "B2B Service Focused Business Owner",
    "Service Provider / freelancer / Agency",
];

const STAGES = [
    "Idea / Early stage",
    "Revenue-generating",
    "Scaling",
    "Growth Spree / Expansion",
];

export default function CommunityJoinModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        businessName: "",
        website: "",
        role: "",
        stage: "",
        struggle: "",
    });

    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState("");
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
    const [isStageDropdownOpen, setIsStageDropdownOpen] = useState(false);

    // Close dropdowns on scroll
    const handleScroll = () => {
        if (isRoleDropdownOpen) setIsRoleDropdownOpen(false);
        if (isStageDropdownOpen) setIsStageDropdownOpen(false);
    };

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest(".dropdown-container") &&
                (isRoleDropdownOpen || isStageDropdownOpen)
            ) {
                setIsRoleDropdownOpen(false);
                setIsStageDropdownOpen(false);
            }
        };

        if (isRoleDropdownOpen || isStageDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isRoleDropdownOpen, isStageDropdownOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for custom dropdowns
        if (!formData.role || !formData.stage) {
            setStatus("error");
            setErrorMessage("Please select your role and business stage.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            // Simulate API call or replace with actual endpoint
            // const res = await fetch("/api/join-community", { method: "POST", body: JSON.stringify(formData) ... });

            // For now, simulate success after delay like InterestModal
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus("success");
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setFormData({
                    name: "",
                    email: "",
                    whatsapp: "",
                    businessName: "",
                    website: "",
                    role: "",
                    stage: "",
                    struggle: "",
                });
            }, 4000);
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content - LIGHT THEME */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="
              relative w-full max-w-2xl 
              bg-[#F3F0EB] 
              border border-[#232323]/10
              rounded-2xl 
              shadow-2xl 
              overflow-hidden
              flex flex-col
              max-h-[90vh]
              text-[#232323]
            "
                    >
                        {/* Header */}
                        <div className="p-6 sm:p-8 flex justify-between items-start border-b border-[#232323]/10 shrink-0">
                            <div>
                                <h2 className="geist-semibold text-2xl text-[#232323] mb-2">
                                    Vikava Labs Community – Request to Join
                                </h2>
                                <p className="text-[#232323]/60 text-sm">
                                    This is a founder-first space for growth, support, and long-term clarity.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-[#232323]/40 hover:text-[#232323] transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form Scrollable Area */}
                        <div
                            className="p-6 sm:p-8 overflow-y-auto custom-scrollbar"
                            onScroll={handleScroll}
                            data-lenis-prevent
                        >
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-[#232323]">
                                    <CheckCircle size={64} className="text-green-600 mb-6" />
                                    <h3 className="text-2xl geist-medium mb-2">Thank you.</h3>
                                    <p className="text-[#232323]/60">
                                        Community access is reviewed. Our team will reach out with next steps.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* WhatsApp & Business Name */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                WhatsApp Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="+91 00000 00000"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Business Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="Your Business Name"
                                            />
                                        </div>
                                    </div>

                                    {/* Website & Role */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Website{" "}
                                                <span className="text-[#232323]/40 text-xs">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="https://..."
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                You Are <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative dropdown-container">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setIsRoleDropdownOpen(!isRoleDropdownOpen);
                                                        setIsStageDropdownOpen(false);
                                                    }}
                                                    className="w-full flex items-center justify-between bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] text-left hover:border-[#232323]/30 transition-colors"
                                                >
                                                    <span className="text-sm truncate">
                                                        {formData.role || "Select"}
                                                    </span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#232323]/60 transition-transform duration-200 ${isRoleDropdownOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>
                                                {isRoleDropdownOpen && (
                                                    <div className="absolute z-20 mt-1 w-full bg-white border border-[#232323]/10 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                                                        {ROLES.map((role) => (
                                                            <button
                                                                key={role}
                                                                type="button"
                                                                onClick={() => {
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        role: role,
                                                                    }));
                                                                    setIsRoleDropdownOpen(false);
                                                                }}
                                                                className={`
                                  w-full text-left px-4 py-3 text-sm transition-colors
                                  ${formData.role === role
                                                                        ? "bg-[#232323] text-white"
                                                                        : "text-[#232323] hover:bg-[#F3F0EB]"
                                                                    }
                                `}
                                                            >
                                                                {role}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#232323]/80">
                                            Current Business Stage <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative dropdown-container">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsStageDropdownOpen(!isStageDropdownOpen);
                                                    setIsRoleDropdownOpen(false);
                                                }}
                                                className="w-full flex items-center justify-between bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] text-left hover:border-[#232323]/30 transition-colors"
                                            >
                                                <span className="text-sm truncate">
                                                    {formData.stage || "Select"}
                                                </span>
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-[#232323]/60 transition-transform duration-200 ${isStageDropdownOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            {isStageDropdownOpen && (
                                                <div className="absolute z-20 mt-1 w-full bg-white border border-[#232323]/10 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                                                    {STAGES.map((stage) => (
                                                        <button
                                                            key={stage}
                                                            type="button"
                                                            onClick={() => {
                                                                setFormData((prev) => ({ ...prev, stage: stage }));
                                                                setIsStageDropdownOpen(false);
                                                            }}
                                                            className={`
                                  w-full text-left px-4 py-3 text-sm transition-colors
                                  ${formData.stage === stage
                                                                    ? "bg-[#232323] text-white"
                                                                    : "text-[#232323] hover:bg-[#F3F0EB]"
                                                                }
                                `}
                                                        >
                                                            {stage}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Stuggle */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#232323]/80">
                                            What are you currently struggling with in your business?{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            name="struggle"
                                            value={formData.struggle}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors resize-none"
                                            placeholder="Short reflection..."
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-lg text-sm">
                                            <AlertCircle size={16} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* Footer Actions - ANIMATED BUTTON */}
                                    <div className="pt-4 flex justify-end">
                                        <motion.button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            initial="rest"
                                            whileHover="hover"
                                            animate="rest"
                                            className="
                        relative 
                        bg-[#232323] geist-medium 
                        rounded-full px-5 py-3 
                        flex items-center 
                        text-[#F3F0EB] 
                        text-base
                        overflow-hidden
                        disabled:opacity-70 disabled:cursor-not-allowed
                      "
                                        >
                                            {status === "submitting" ? (
                                                <div className="flex items-center gap-2">
                                                    <Loader2 size={18} className="animate-spin" />
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    {/* VISIBLE TEXT */}
                                                    <motion.span
                                                        variants={{
                                                            rest: { y: 0, opacity: 1 },
                                                            hover: { y: 30, opacity: 0 },
                                                        }}
                                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                                        className="relative z-10 whitespace-nowrap"
                                                    >
                                                        Request to Join
                                                    </motion.span>

                                                    {/* HOVER TEXT */}
                                                    <motion.span
                                                        variants={{
                                                            rest: { y: -30, opacity: 0 },
                                                            hover: { y: 0, opacity: 1 },
                                                        }}
                                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                                        className="absolute left-5 whitespace-nowrap"
                                                    >
                                                        Request to Join
                                                    </motion.span>

                                                    {/* ARROW */}
                                                    <span
                                                        className="
                              ml-4 
                              w-[32px] h-[32px] 
                              md:w-[36px] md:h-[36px] 
                              rounded-full bg-[#F3F0EB] 
                              flex items-center justify-center 
                              text-black 
                                relative overflow-hidden
                              "
                                                    >
                                                        <motion.span
                                                            variants={{
                                                                rest: { x: -30, opacity: 0 },
                                                                hover: { x: 0, opacity: 1 },
                                                            }}
                                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                                            className="absolute"
                                                        >
                                                            →
                                                        </motion.span>

                                                        <motion.span
                                                            variants={{
                                                                rest: { x: 0, opacity: 1 },
                                                                hover: { x: 30, opacity: 0 },
                                                            }}
                                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                                            className="absolute"
                                                        >
                                                            →
                                                        </motion.span>
                                                    </span>
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <p className="text-[12px] text-[#201f24]/60 geist-medium text-right">
                                            Founders and service providers are onboarded into separate,
                                            purpose-specific groups.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
