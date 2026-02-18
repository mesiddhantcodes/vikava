"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const terms = [
    {
      id: 1,
      title: "1. Introduction",
      content: [
        'Welcome to Vikava Labs ("we," "our," "us"). By accessing or using our website (www.vikavaIabs.com) and related services, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before using our site.',
        "If you do not agree with these terms, you should not access or use this website.",
      ],
    },
    {
      id: 2,
      title: "2. Use of the Website",
      bullets: [
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment.",
        "You must not use the website to transmit any harmful, offensive, or unlawful material.",
        "We reserve the right to restrict or terminate access to the site at our discretion.",
      ],
    },
    {
      id: 3,
      title: "3. Intellectual Property Rights",
      bullets: [
        "All content on this website—including text, graphics, logos, images, icons, videos, and software—is the property of Vikava Labs or its licensors.",
        "You may not reproduce, distribute, modify, or use any part of the content without prior written consent from Vikava Labs.",
        '"Vikava Labs" and associated logos are trademarks owned by us and protected under applicable laws.',
      ],
    },
    {
      id: 4,
      title: "4. Service Information",
      bullets: [
        "All information provided on the site is for general informational purposes only.",
        "While we strive for accuracy, we make no guarantees regarding the completeness, reliability, or suitability of the information for specific purposes.",
        "Vikava Labs reserves the right to modify, suspend, or discontinue any service or content without notice.",
      ],
    },
    {
      id: 5,
      title: "5. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of those third parties.",
      ],
    },
    {
      id: 6,
      title: "6. Limitation of Liability",
      bullets: [
        "Vikava Labs, its affiliates, and team members shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.",
        "You agree that your use of the site is at your own risk.",
      ],
    },
    {
      id: 7,
      title: "7. Privacy & Data Protection",
      bullets: [
        "We value your privacy and handle personal data in accordance with applicable data protection laws, including India's Digital Personal Data Protection (DPDP) Act.",
        "Please refer to our Privacy Policy for detailed information on how we collect, store, and use your data.",
      ],
    },
    {
      id: 8,
      title: "8. Compliance & Ethics",
      content: [
        "Vikava Labs operates with transparency and ethical business practices. We promote fair engagement, data protection, and sustainability in all our partnerships.",
      ],
    },
    {
      id: 9,
      title: "9. Governing Law & Jurisdiction",
      content: [
        "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
      ],
    },
    {
      id: 10,
      title: "10. Updates to Terms",
      content: [
        'We may revise these Terms & Conditions periodically. Any updates will be posted on this page with a revised "Last Updated" date. Continued use of the website after such changes constitutes acceptance of the revised terms.',
      ],
    },
    {
      id: 11,
      title: "11. Contact Us",
      content: [
        "For any questions about these Terms & Conditions, please contact:",
        "info@vikavaIabs.com",
        "Vikava Labs, New Delhi, India",
      ],
    },
  ];

  return (
    <section className="bg-[#F3F0EB] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1c18] mb-12 text-center garamond-400"
        >
          Terms & Conditions
        </motion.h1>

        {/* Terms List */}
        <div className="space-y-8">
          {terms.map((term, index) => (
            <motion.div
              key={term.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Section Title */}
              <h2 className="text-[20px] md:text-[22px] lg:text-[26px] geist-bold text-[#1b1c18] mb-4 mont-600">
                {term.title}
              </h2>

              {/* Content */}
              {term.content && (
                <div className="space-y-0">
                  {term.content.map((paragraph, idx) => {
                    const isContactLine =
                      term.id === 11 &&
                      (paragraph === "info@vikavaIabs.com" ||
                        paragraph === "Vikava Labs, New Delhi, India");

                    return (
                      <p
                        key={idx}
                        className={`text-[16px] md:text-[18px] lg:text-[20px] text-[#3a3a3a] leading-relaxed mont-400 ${
                          isContactLine
                            ? "font-bold geist-bold"
                            : "geist-medium"
                        }`}
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Bullets */}
              {term.bullets && (
                <ul className="space-y-3">
                  {term.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-[16px] md:text-[18px] lg:text-[20px] geist-medium text-[#3a3a3a] leading-relaxed mont-400 flex items-start"
                    >
                      <span className="mr-3 mt-1.2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
