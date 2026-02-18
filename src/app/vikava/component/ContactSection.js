// app/components/ContactSection.jsx
import ContactForm from "./ContactForm";
import SocialIcons from "./SocialIcons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 pt-32 lg:pt-40"
    >
      <div className="mx-auto flex max-w-[95%] flex-col gap-10 lg:flex-row lg:items-start lg:justify-center">
        {/* Left: video / image + contact info */}
        <div className="flex-1 w-full max-w-[583px] mx-auto lg:mx-0">
          {/* Video/image card */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[364px] w-full overflow-hidden rounded-lg bg-[#D9D4CC]">
            <video
              src="/vikava/contactVideo.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Contact info */}
          <div className="mt-8 space-y-4 text-[16px] sm:text-[18px] text-[#16161A]">
            <div className="flex items-center geist-medium gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#15151B] text-white text-sm">
                @
              </span>
              <span className="break-all">info@vikavalabs.com</span>
            </div>
            {/* <div className="flex items-center geist-medium gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#15151B] text-white text-sm">
                ☎
              </span>
              <span>contact no.</span>
            </div> */}
            <div className="flex items-start gap-3 geist-medium leading-relaxed">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#15151B] text-white text-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="mt-1  flex-1">
                Vikava Labs Pvt. Ltd.
                Greater Noida,
                Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Social icons */}
          <SocialIcons />
        </div>

        {/* Right: form card */}
        <div className="flex-1 w-full max-w-[583px] mx-auto lg:mx-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
