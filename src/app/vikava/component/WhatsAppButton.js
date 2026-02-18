import Image from "next/image";
import Link from "next/link";

const WhatsAppButton = () => {
  const WHATSAPP_NUMBER = "+919810064608"; // Replace with your WhatsApp number
  const message = "Hi! I'm interested in Vikava Labs services.";
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] lg:bottom-8 lg:right-8">
      <Link
        href={whatsappURL}
        target="_blank"
        className="inline-block cursor-pointer transition-transform duration-300 ease-out hover:scale-110 "
        aria-label="Contact via WhatsApp"
      >
        <Image
          src="/wp.png"
          alt="Vikava Labs WhatsApp"
          width={50}
          height={50}
        // className="shadow-lg"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
