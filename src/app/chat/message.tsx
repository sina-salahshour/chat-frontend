import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { Variants } from "framer-motion";

export const messageVariants = {
    show: { height: "auto", x: 0, opacity: 1 },
    initial: { height: 0, x: -10, opacity: 0 },
    exit: { height: 0, opacity: 0 },
} satisfies Variants;

export interface MessageProps {
    profile?: string;
    name: string;
    tag?: "mod" | "user";
    message: string;
    replyTo?: string;
}

export const Message = ({ message, name, profile, replyTo, tag }: MessageProps) =>
    <motion.div variants={messageVariants} initial="initial" animate="show" exit="exit" className="group flex flex-col text-xs font-semibold text-white" data-has-tag={!!tag} data-tag={tag}>
        <h3 className="flex items-center gap-2">
            {profile && <figure className="relative h-6 w-6 overflow-hidden rounded">
                <Image fill src={profile} alt={name} />
            </figure>}
            {tag && <span className="rounded bg-accent-default p-1 uppercase text-background ">{tag}</span>}
            <span className="group-data-[has-tag=true]:text-accent-default">{name}</span>
        </h3>
        <p className="mt-1 text-secondary group-data-[tag=mod]:text-result-fail group-data-[tag=user]:text-white">
            {replyTo && <span className="text-white text-opacity-80 group-data-[has-tag=true]:text-opacity-100">@{replyTo}</span>} {message}
        </p>
    </motion.div>;
