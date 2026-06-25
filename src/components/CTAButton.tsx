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
    "bg-aura-cta text-aura-ctaText hover:opacity-85 focus-visible:outline-aura-deepAtlantic",
  secondary:
    "border-b border-aura-olive bg-transparent px-0 text-aura-deepAtlantic hover:text-aura-olive focus-visible:outline-aura-atlantic",
  light:
    "bg-aura-ctaText text-aura-deepAtlantic hover:opacity-85 focus-visible:outline-aura-softWhite",
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
      className={`inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-medium transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${eventClass} ${className}`}
    >
      {children}
    </Link>
  );
}
