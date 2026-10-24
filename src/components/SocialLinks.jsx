import { FiGithub } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { profile } from "../data/portfolio";

export default function SocialLinks({ light = false, compact = false }) {
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const socials = [
    {
      name: "GitHub",
      Icon: FiGithub,
      url: profile.socials.github || profile.github,
    },
    { name: "LinkedIn", Icon: FaLinkedinIn, url: profile.socials.linkedin },
    { name: "X", Icon: FaXTwitter, url: profile.socials.x },
    { name: "Facebook", Icon: FaFacebookF, url: profile.socials.facebook },
    {
      name: "WhatsApp",
      Icon: FaWhatsapp,
      url:
        profile.socials.whatsapp ||
        (phoneDigits ? `https://wa.me/${phoneDigits}` : ""),
    },
  ];
  const className = `inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-[11px] ${light ? "border-white/20 text-white/75" : "border-line text-muted"}`;

  return (
    <div className="flex flex-wrap gap-2" aria-label="Social profiles">
      {socials.map(({ name, Icon, url }) =>
        url ? (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} profile (opens in new tab)`}
            className={`${className} transition ${light ? "hover:border-lilac hover:bg-white/10 hover:text-white" : "hover:border-accent hover:text-accent"}`}
          >
            <Icon aria-hidden="true" size={14} />
            {!compact && name}
          </a>
        ) : (
          <span
            key={name}
            aria-disabled="true"
            title={`${name} profile coming soon`}
            className={`${className} border-dashed`}
          >
            <Icon aria-hidden="true" size={14} />
            {!compact && name}
            <span className="sr-only"> profile coming soon</span>
          </span>
        ),
      )}
    </div>
  );
}
