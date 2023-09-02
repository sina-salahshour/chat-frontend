import { cn } from "utils/cn";
import React from "react";
import type { PropsWithChildren } from "react";
import type { PropsWithClassName } from "types/common";

interface CardProps extends PropsWithChildren, PropsWithClassName {}
export const Card = ({ children, className }: CardProps) =>
    <section className={cn("w-base-width rounded-lg bg-base p-6 pb-8 shadow-card", className)}>{children}</section>;
