import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primaryPro hover:bg-[#136E61]",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[40px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] text-sm uppercase tracking-[2px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : Link;
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink, linkVariants };
