import { cn } from "utils/cn";
import React from "react";
import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
    variant?: "primary" | "secondary";
    size?: "normal" | "compact" | "custom";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", size = "normal", className, ...props }, ref) =>
    (<button data-variant={variant} data-size={size} ref={ref} {...props}
        className={cn(
            "flex flex-col items-center justify-center font-semibold transition-all disabled:opacity-50",
            "rounded data-primary:bg-accent-default data-primary:text-background",
            "data-primary:hover:shadow-accent-glow data-primary:active:shadow-none data-primary:disabled:shadow-none",
            "data-secondary:bg-primary data-secondary:text-secondary data-secondary:hover:bg-primary-hover data-secondary:active:text-white",
            "data-secondary:disabled:bg-primary data-secondary:disabled:text-secondary",
            "data-normal:h-10 data-normal:px-4 data-normal:text-sm data-normal:leading-[18px]",
            "data-compact:h-6 data-compact:text-[12px] data-compact:leading-4",
            className
        )}
    />));
Button.displayName = "Button";
