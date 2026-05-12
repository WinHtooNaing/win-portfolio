import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-blue-500 text-white hover:bg-blue-600",
  outline:
    "border border-black/10 bg-white text-black hover:bg-blue-50",
  ghost: "text-black hover:bg-blue-50",
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
