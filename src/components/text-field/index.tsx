"use client";

import { cn } from "utils/cn";
import React, { useId } from "react";
import type { ComponentProps } from "react";

export interface TextFieldProps extends ComponentProps<"input"> {
    title?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({ title, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = props.id ?? generatedId;
    return (<div data-has-title={typeof title !== "undefined"} className={cn("flex flex-col data-[has-title=true]:gap-1", className)}>
        {title && <label htmlFor={inputId} className="text-[10px] font-semibold leading-[14px] text-secondary">{title}</label>}
        <input type="text" {...props} ref={ref} id={inputId}
            className="min-h-[40px] rounded-[4px] border-2 border-solid  border-black bg-black px-4
        py-2 text-xs font-semibold text-white
        outline-none transition placeholder:text-secondary hover:placeholder:text-white focus:border-accent-active
        active:border-accent-active disabled:opacity-50
        " />
    </div>);
});

TextField.displayName = "TextField";
