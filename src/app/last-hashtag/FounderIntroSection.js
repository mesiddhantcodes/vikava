"use client";

export function FounderIntroSection() {
  return (
    <section className="w-full bg-[#effaf0] flex justify-center py-12 sm:py-16 md:py-24">
      <div
        className="
          w-[90%] mx-auto
          flex flex-col
          lg:flex-row
          items-start lg:items-end
          justify-between
          gap-10 md:gap-16
        "
      >
        {/* Left quote */}
        <p
          className="
            inter-medium text-[#111]
            max-w-full sm:max-w-[640px]
            text-left
          "
          style={{
            fontSize: "clamp(14px, 1.1vw, 20px)",
            lineHeight: 1.7,
          }}
        >
          “Marketing isn’t about shouting the loudest – it’s about telling the
          sharpest story and turning attention into trust. At Last Hashtag, we
          connect every dot so your brand isn’t just seen, it’s chosen.”
          <br />
          <br />
          <span className="inter-semibold">
            – Puuneet Aggarwal, Founder &amp; Mentor, Vikava Labs
          </span>
        </p>

        {/* Right heading */}
        <div
          className="
            flex flex-col
            items-start sm:items-start
            lg:items-end
            text-left lg:text-right
            w-full lg:w-auto
          "
        >
          <h2
            className="
              galindo-regular text-[#111]
              text-[40px]
              sm:text-[50px]
              md:text-[60px]
              lg:text-[70px]
              xl:text-[90px]
              2xl:text-[110px]
              leading-[0.9]
            "
          >
            What Drives
            <br />
            Last Hashtag -
            <br />From the Founder
          </h2>
        </div>
      </div>
    </section>
  );
}
