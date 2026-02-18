"use client";

export default function CareersManifestoSection() {
  return (
    <section className="w-full bg-[#F3F0EB]">
      <div
        className="
          mx-auto
          max-w-[95%]
          px-5 sm:px-8 md:px-12 lg:px-16
          py-16 sm:py-20 md:py-24
          text-[#111]
        "
      >
        {/* INTRO */}
        <div className="geist-medium text-[20px] leading-[1.2] space-y-6">
          <p>
            Vikava Labs designs systems, platforms, and execution backbones that
            help businesses grow without breaking. This work requires people
            who can think long-term, operate with ownership, and stay calm in
            ambiguity.
          </p>

          <p className="geist-bold">
            We don’t believe in mass hiring. We believe in alignment.
          </p>
        </div>

        {/* HOW WE WORK */}
        <div className="mt-14 sm:mt-18 md:mt-20">
          <h2 className="geist-bold text-[20px] mb-6">
            How We Work
          </h2>

          <div className="geist-medium text-[20px] leading-[1.2] space-y-6">
            <p>
              At Vikava Labs, work is not defined by titles or task lists. It is
              defined by responsibility, thinking depth, and execution quality.
            </p>

            <div>
              <p className="mb-3">We collaborate with people who:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Think beyond instructions</li>
                <li>Are comfortable solving unclear problems</li>
                <li>Understand that systems outlast individuals</li>
                <li>Value long-term learning over short-term labels</li>
              </ol>
            </div>

            <p>
              If you are looking for predictable roles or linear career
              ladders, this may not be the right place. If you want to build
              something meaningful over time, you might belong here.
            </p>
          </div>
        </div>

        {/* WHAT WE BUILD */}
        <div className="mt-14 sm:mt-18 md:mt-20">
          <h2 className="geist-bold text-[20px] mb-6">
            What We Build
          </h2>

          <div className="geist-medium text-[20px] leading-[1.2] space-y-6">
            <p>Our work spans:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Business strategy and decision frameworks</li>
              <li>Brand, design, and communication systems</li>
              <li>Technology-enabled platforms and workflows</li>
              <li>Marketing, distribution, and growth infrastructure</li>
              <li>Operations, processes, and ecosystem enablement</li>
            </ol>

            <p>
              These are not departments. They are interconnected layers of
              business building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
