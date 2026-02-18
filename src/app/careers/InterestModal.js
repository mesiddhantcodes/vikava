"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

const INTEREST_AREAS = [
    "Strategy & Research",
    "Design & Creative",
    "Technology / Product",
    "Marketing & Growth",
    "Operations & Systems",
    "Not sure yet",
];

export default function InterestModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        portfolioUrl: "",
        interest: INTEREST_AREAS[0],
        reason: "",
    });

    const [files, setFiles] = useState({
        portfolioFile: null,
        resumeFile: null,
    });

    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        if (selectedFiles && selectedFiles[0]) {
            setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const data = new FormData();
            Object.keys(formData).forEach((key) => data.append(key, formData[key]));
            if (files.portfolioFile) data.append("portfolioFile", files.portfolioFile);
            if (files.resumeFile) data.append("resumeFile", files.resumeFile);

            const res = await fetch("/api/send-email", {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message || "Failed to submit");

            setStatus("success");
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    portfolioUrl: "",
                    interest: INTEREST_AREAS[0],
                    reason: "",
                });
                setFiles({ portfolioFile: null, resumeFile: null });
            }, 3000);
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
                                    Work With Vikava Labs
                                </h2>
                                <p className="text-[#232323]/60 text-sm">
                                    Expression of Interest
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
                        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-[#232323]">
                                    <CheckCircle size={64} className="text-green-600 mb-6" />
                                    <h3 className="text-2xl geist-medium mb-2">Received!</h3>
                                    <p className="text-[#232323]/60">
                                        Thanks for expressing your interest. We'll be in touch if there's a good fit.
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

                                    {/* Phone & Area of Interest Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#232323]/80">
                                                Area of Interest <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="w-full flex items-center justify-between bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] text-left hover:border-[#232323]/30 transition-colors"
                                                >
                                                    <span className="text-sm truncate">
                                                        {formData.interest || "Select area of interest"}
                                                    </span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#232323]/60 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="absolute z-20 mt-1 w-full bg-white border border-[#232323]/10 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                                                        {INTEREST_AREAS.map((area) => (
                                                            <button
                                                                key={area}
                                                                type="button"
                                                                onClick={() => {
                                                                    setFormData((prev) => ({ ...prev, interest: area }));
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                                className={`
                                                                    w-full text-left px-4 py-3 text-sm transition-colors
                                                                    ${formData.interest === area
                                                                        ? "bg-[#232323] text-white"
                                                                        : "text-[#232323] hover:bg-[#F3F0EB]"
                                                                    }
                                                                `}
                                                            >
                                                                {area}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Portfolio / Link */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#232323]/80">
                                            LinkedIn / Portfolio / Website <span className="text-[#232323]/40 text-xs">(Optional)</span>
                                        </label>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <input
                                                type="text"
                                                name="portfolioUrl"
                                                value={formData.portfolioUrl}
                                                onChange={handleInputChange}
                                                className="flex-1 bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors"
                                                placeholder="https://..."
                                            />
                                            <div className="relative shrink-0">
                                                <input
                                                    type="file"
                                                    name="portfolioFile"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    id="portfolio-upload"
                                                />
                                                <label
                                                    htmlFor="portfolio-upload"
                                                    className="cursor-pointer flex items-center justify-center gap-2 bg-white hover:bg-[#EEEDE7] border border-[#232323]/10 rounded-lg px-4 py-3 text-[#232323]/80 transition-colors text-sm whitespace-nowrap"
                                                >
                                                    <Upload size={16} />
                                                    {files.portfolioFile ? "Attached" : "Attach File"}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reason & Resume */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#232323]/80">
                                            Why Vikava Labs? <span className="text-[#232323]/40 text-xs">(Optional)</span>
                                        </label>
                                        <textarea
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full bg-white border border-[#232323]/10 rounded-lg p-3 text-[#232323] focus:outline-none focus:border-[#232323]/40 transition-colors resize-none"
                                            placeholder="Tell us briefly about why you want to join..."
                                        />

                                        <div className="pt-2">
                                            <input
                                                type="file"
                                                name="resumeFile"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="resume-upload"
                                                accept=".pdf,.doc,.docx"
                                            />
                                            <label
                                                htmlFor="resume-upload"
                                                className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#232323]/60 hover:text-[#232323] transition-colors"
                                            >
                                                <Upload size={16} />
                                                {files.resumeFile ? files.resumeFile.name : "Attach Resume (Optional)"}
                                            </label>
                                        </div>
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
                                                        Submit Interest
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
                                                        Submit Interest
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
                                    <div className="flex flex-col items-end mt-2">

                                        <p className="text-[12px] text-[#201f24]/60 geist-medium text-right mt-1">
                                            Disclaimer: Submitting this form does not guarantee engagement or a role.
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
