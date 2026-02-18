"use client";

export default function PrivacyPolicySection() {
    return (
        <section className="w-full bg-[#F7F4EE]">
            <div
                className="
          mx-auto
          max-w-7xl
          px-5 sm:px-8 md:px-12 lg:px-16
          py-16 sm:py-20 md:py-24
          text-[#111]
        "
            >
                <div className="space-y-12">
                    {/* 1 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            1. Information We Collect
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            We may collect personal information including name, email address,
                            phone number, company details, and form submissions.
                        </p>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            2. Purpose of Collection
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Information is collected to respond to inquiries, provide requested
                            updates, improve our website, and ensure security.
                        </p>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            3. Data Sharing
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Data may be shared with trusted service providers such as hosting,
                            analytics, CRM, or communication tools on a need-to-know basis.
                        </p>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            4. Data Security
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            We implement reasonable administrative and technical safeguards to
                            protect personal data.
                        </p>
                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            5. Data Retention
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            Data is retained only as long as necessary for the purposes stated
                            or as required by law.
                        </p>
                    </div>

                    {/* 6 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            6. User Rights
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            You may request access, correction, or deletion of your personal
                            data by contacting{" "}
                            <a
                                href="mailto:legal@vikavalabs.com"
                                className="underline underline-offset-2"
                            >
                                legal@vikavalabs.com
                            </a>.
                        </p>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="geist-bold text-[26px] mb-2">
                            7. Governing Law & Jurisdiction
                        </h2>
                        <p className="geist-medium text-[20px] leading-[1.6]">
                            This Privacy Policy is governed by the laws of India, with
                            jurisdiction in Uttar Pradesh / Delhi NCR.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
