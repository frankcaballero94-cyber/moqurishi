import { Linkedin, Instagram, Facebook } from "lucide-react";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/mo-qurishi-7312813a9", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/qurishihealthcare/", label: "Instagram", Icon: Instagram },
  {
    href: "https://www.facebook.com/people/Qurishi-HealthCare/pfbid02A1oiT4GBXAFNzW6kuizjC68ZtGURANSPumXgin8g9ANEXs6duzk2m8N9uuR6xgyil/",
    label: "Facebook",
    Icon: Facebook,
  },
];

export function SocialLinks({
  className = "",
  variant = "outline",
  size = 9,
}: {
  className?: string;
  variant?: "outline" | "gold";
  size?: number;
}) {
  const base =
    variant === "gold"
      ? "border border-[oklch(0.74_0.13_78/0.55)] bg-white/[0.04] text-gold-soft hover:bg-white/[0.10] hover:border-[oklch(0.85_0.10_85/0.9)]"
      : "border border-border text-muted-foreground hover:text-accent hover:border-accent";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onClick={(e) => {
            e.preventDefault();
            const win = window.open(href, "_blank", "noopener,noreferrer");
            if (!win && window.top) window.top.location.href = href;
          }}
          style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
          className={`inline-flex items-center justify-center rounded-full transition ${base}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
