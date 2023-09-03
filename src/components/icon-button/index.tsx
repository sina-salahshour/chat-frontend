import { cn } from "utils/cn";
import React, { forwardRef } from "react";
import type { ComponentProps } from "react";

export type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface IconButtonProps extends ComponentProps<"button"> {
    icon: IconType;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ icon: Icon, className, children, ...props }: IconButtonProps, ref) =>
    <button
        {...props}
        ref={ref}
        className={cn("group flex items-center gap-2 text-secondary hover:text-white active:text-accent-active disabled:opacity-50", className)}
    >
        <Icon className="[&_path]:fill-secondary group-hover:[&_path]:fill-white group-active:[&_path]:fill-accent-active" /> <div>{children}</div>
    </button>);
IconButton.displayName = "IconButton";
