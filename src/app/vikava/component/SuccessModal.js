// SuccessModal.jsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                duration: 0.3,
                ease: [0.56, 0.51, 0.85, 0.84],
              }}
              className="bg-[#F3F0EB] rounded-2xl shadow-2xl w-full max-w-md border border-[#abaaac] pointer-events-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#27252E] hover:text-[#15151B] transition-colors"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Success icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-[28px] sm:text-[32px] geist-bold text-[#201f24] mb-3">
                  Message Sent Successfully!
                </h3>

                {/* Description */}
                <p className="text-[16px] geist-regular text-[#27252E] mb-8 leading-relaxed">
                  Our team will review your context and respond with the next
                  appropriate step.
                </p>

                {/* Close button */}
                <Link href="/" passHref>
                  <motion.button
                    // onClick={onClose}

                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="cursor-pointer relative bg-black text-white geist-medium rounded-full px-6 py-3 text-[16px] overflow-hidden transition-colors w-full sm:w-auto"
                  >
                    <motion.span
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: 40, opacity: 0 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.56, 0.51, 0.85, 0.84],
                      }}
                      className="relative z-10 block"
                    >
                      Go to Homepage
                    </motion.span>

                    <motion.span
                      variants={{
                        rest: { y: -40, opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.56, 0.51, 0.85, 0.84],
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      Go to Homepage
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
