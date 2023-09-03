import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import type { PropsWithChildren } from "react";
import type { Variants } from "framer-motion";

const modalVariants = {
    enter: {
        opacity: 0,
    },
    idle: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
} satisfies Variants;

export interface ModalProps extends PropsWithChildren {
    show: boolean;
    onHide: () => void;
}
export const Modal = ({ show, children, onHide }: ModalProps) =>
    <AnimatePresence>
        {
            show && <motion.div
                variants={modalVariants}
                initial="enter" animate="idle" exit="exit"
                className="fixed inset-0 flex items-center justify-center"> <div className="absolute inset-0 bg-black bg-opacity-80" onClick={onHide} />
                <div className="relative">{children}</div>
            </motion.div>
        }
    </AnimatePresence>;
