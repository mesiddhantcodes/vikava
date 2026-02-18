// components/FounderSustainabilitySection.jsx
// components/FounderSustainabilitySection.jsx
export default function FounderSustainabilitySection() {
  return (
    <section className="md:min-h-dvh bg-[#D0D0D0] flex items-center py-12 md:py-18">
      {/* Increased md:py-24 for clean breathing space */}
      <div className="mx-auto flex w-full max-w-[90%] gap-10 lg:items-end flex-col md:flex-row">
        {/* Left: Heading */}
        <div className="md:w-2/3 w-full flex flex-col justify-center">
          <h2 className="font-afacadMedium leading-[0.9] text-[#111217]">
            {/* Mobile Heading */}
            <span className="block font-bold text-[clamp(36px,10vw,48px)] sm:text-[72px] md:hidden leading-[0.9]">
              Sustainability in the Founder's Words
            </span>

            {/* Desktop Heading */}
            <span className="hidden md:block">
              <span
                className="block font-bold
    text-[48px]
    md:text-[64px]
    lg:text-[80px]
    xl:text-[100px]
    2xl:text-[120px]
  "
              >
                Sustainability
              </span>

              <span
                className="block font-bold
    text-[48px]
    md:text-[64px]
    lg:text-[80px]
    xl:text-[100px]
    2xl:text-[120px]
  "
              >
                in the
              </span>

              <span
                className="block font-bold
    text-[48px]
    md:text-[64px]
    lg:text-[80px]
    xl:text-[100px]
    2xl:text-[120px]
  "
              >
                Founder’s
              </span>

              <span
                className="block font-bold
    text-[48px]
    md:text-[64px]
    lg:text-[80px]
    xl:text-[100px]
    2xl:text-[120px]
  "
              >
                Words
              </span>
            </span>
          </h2>
        </div>

        {/* Right: Quote */}
        <div className="md:w-3/4 w-full flex items-center pr-0 md:pr-8">
          <div className="ml-auto font-afacadMedium text-[#111217] md:max-w-xl max-w-full">
            <p className="text-[18px] sm:text-[20px] leading-snug sm:leading-tight mb-4 md:mb-6">
              "True sustainability is not a buzzword — it’s fibres, hands, and
              processes aligned with trust. That’s what we built the Sustainable
              Design Library for."
            </p>

            {/* Signature — now a single line always */}
            <p className="text-[20px] sm:text-[24px] font-afacadBold leading-relaxed">
              — Puuneet Aggarwal, Founder & Mentor, Vikava Labs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
