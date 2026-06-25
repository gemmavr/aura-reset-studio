import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  eventName?: string;
  className?: string;
};

const variants = {
  primary:
    "bg-aura-atlantic text-white shadow-[0_14px_34px_rgba(47,111,134,0.18)] hover:-translate-y-0.5 hover:bg-aura-deepAtlantic hover:shadow-[0_18px_44px_rgba(23,62,64,0.2)] focus-visible:outline-aura-deepAtlantic",
  secondary:
    "border border-aura-atlantic/35 bg-aura-softWhite text-aura-deepAtlantic hover:-translate-y-0.5 hover:border-aura-deepAtlantic hover:bg-white hover:shadow-[0_14px_34px_rgba(47,111,134,0.1)] focus-visible:outline-aura-atlantic",
  light:
    "bg-aura-softWhite text-aura-deepAtlantic hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_44px_rgba(255,255,255,0.16)] focus-visible:outline-aura-softWhite",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  eventName,
  className = "",
}: CTAButtonProps) {
  const eventClass = eventName
    ? `plausible-event-name=${eventName.replaceAll(" ", "+")}`
    : "";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-0 ${variants[variant]} ${eventClass} ${className}`}
    >
      {children}
    </Link>
  );
}
