"use client";

export default function LegalDisclaimerSection() {
    return (
        <section className="w-full bg-[#F7F4EE]">
            <div
                className="
          mx-auto
          max-w-[85%]
          px-5 sm:px-8 md:px-12 lg:px-16
          py-16 sm:py-20 md:py-24
          text-[#111]
        "
            >
                <div className="space-y-12">
                    {/* 1 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            1. General Disclaimer
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            All content on this website is for informational purposes only and does not constitute professional advice.
                        </p>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            2. No Professional Advice
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Vikava Labs is not a law firm, accounting firm, or investment advisor. Legal, tax, or compliance services are delivered through partner professionals under separate agreements.
                        </p>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            3. External Links
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            The website may contain links to third-party websites. Vikava Labs does not endorse or control such websites.
                        </p>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            4. Limitation of Liability
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Reliance on any information provided on this website is at your own risk.
                        </p>
                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            5. Third-Party Creative Assets & Trademarks
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Certain images, videos, icons, illustrations, animations, GIFs, mockups, design elements, brand names, trademarks, or logos displayed on this website may be sourced from royalty-free, licensed, open-source, or publicly available platforms, or may be provided by clients or partners for demonstrative purposes. Vikava Labs makes reasonable efforts to ensure that such assets are used in accordance with applicable licenses or permissions. Vikava Labs does not claim ownership over any third-party assets unless explicitly stated. All third-party trademarks, logos, and brand names referenced on this website belong to their respective owners and are used for identification purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
