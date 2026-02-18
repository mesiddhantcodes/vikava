import {
    FaLinkedinIn,
    FaBehance,
    FaInstagram,
    FaThreads,
    FaXTwitter,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa6";

const socials = [
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/vikava-labs/?viewAsMember=true" },
    { icon: FaBehance, label: "Behance", href: "https://www.behance.net/vikavalabs?tracking_source=search_projects%7Cvikava" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/vikavalabs/" },
    { icon: FaThreads, label: "Threads", href: "https://www.threads.com/@vikavalabs" },
    { icon: FaXTwitter, label: "X", href: "https://x.com/VikavaLabs" },
    { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100092550781807" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@vikavalabs?si=--Pq-2EiQvtP8xi9" },
];

export default function SocialIcons() {
    return (
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[22px] md:text-[24px] text-[#181818]">
            {socials.map(({ icon: Icon, label, href }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="hover:opacity-70 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
}
