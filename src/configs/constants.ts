import type { Variants } from "framer-motion";

export const TokenKey = "token";

export const pageTransitions = {
    enter: {
        opacity: 0,
        scale: .9,
        transition: {
            ease: "easeIn",
            duration: .1,
        },
    },
    idle: {
        opacity: 1,
        scale: 1,

    },
    exit: {
        opacity: 0,
        scale: .9,
        transition: {
            ease: "easeOut",
            duration: .1,
        },

    },
} satisfies Variants;
export type PageTransitionKeys = keyof typeof pageTransitions;
