import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold font-body uppercase tracking-wide border-[3px] border-ink transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-ink",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-background text-ink hover:bg-muted",
        secondary: "bg-secondary text-white",
        ghost: "border-transparent shadow-none hover:bg-muted hover:translate-x-0 hover:translate-y-0",
        link: "border-transparent shadow-none text-ink underline-offset-4 hover:underline hover:translate-x-0 hover:translate-y-0",
        gold: "bg-primary text-ink",
        hero: "bg-secondary text-white px-8 py-6 text-base",
        glass: "bg-background text-ink",
        accent: "bg-accent text-ink",
        mint: "bg-mint text-ink",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
