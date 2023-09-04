"use client";

import { cn } from "utils/cn";
import { motion } from "framer-motion";
import React from "react";
import type { PropsWithChildren } from "react";
import type { PropsWithClassName } from "types/common";
import type { Variants } from "framer-motion";

const cardVariants = {
    normal: {
        height: 800,
    },
    collapse: {
        height: 140,
    },
    idle: {},
} satisfies Variants;

interface CardProps extends PropsWithChildren, PropsWithClassName {
    collapse?: boolean;
    animate?: boolean;
}
export const Card = ({ children, className, collapse, animate }: CardProps) =>
    <motion.section
        variants={cardVariants} initial={!animate ? "idle" : "normal"} animate={!animate ? "idle" : collapse ? "collapse" : "normal"}
        className={cn("w-base-width rounded-lg bg-base p-6 pb-8 shadow-card", className)}
    >
        {children}
    </motion.section>;
