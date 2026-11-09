import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/70 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default:
    "border border-stone-900 bg-stone-900 text-white shadow-[3px_3px_0_#b7e451] hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[4px_4px_0_#b7e451]",
  outline:
    "border border-stone-900/20 bg-white/60 text-stone-900 hover:-translate-y-0.5 hover:border-stone-900 hover:bg-white",
  ghost: "text-stone-700 hover:bg-white/70 hover:text-stone-950",
};

const sizes = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-6 py-3",
  icon: "h-10 w-10",
};

type ButtonProps = {
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  className,
  variant = "default",
  size = "default",
  children,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
