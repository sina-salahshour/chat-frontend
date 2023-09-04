import { AnimatePresence, motion } from "framer-motion";
import { Button } from "components/button";
import Image from "next/image";
import React from "react";
import type { UserDto } from "types/dtos/user/user.dto";
import type { Variants } from "framer-motion";

export const messageVariants = {
    show: { height: "auto", x: 0, opacity: 1 },
    initial: { height: 0, x: -10, opacity: 0 },
    exit: { height: 0, opacity: 0 },
} satisfies Variants;
export const messageMenuVariants = {
    show: { height: "auto", opacity: 1 },
    initial: { height: 0, opacity: 0 },
    exit: { height: 0, opacity: 0 },
} satisfies Variants;

export interface MessageProps {
    profile?: string;
    name: string;
    tag?: "mod" | "user";
    message: string;
    replyTo?: UserDto | null;
    user?: UserDto;
    onClickReply: (user?: UserDto) => void;
    isMessageMenuVisible: boolean;
    toggleMessageMenuVisibility: () => void;
}

export const Message = ({ message, name, profile, replyTo, tag, onClickReply, user, isMessageMenuVisible, toggleMessageMenuVisibility }: MessageProps) =>
    <motion.div variants={messageVariants} initial="initial" animate="show" exit="exit" className="group flex flex-col text-xs font-semibold text-white" data-has-tag={!!tag} data-tag={tag}>
        <button className="flex items-center gap-2" onClick={toggleMessageMenuVisibility}>
            {profile && <figure className="relative h-6 w-6 overflow-hidden rounded">
                <Image fill src={profile} alt={name} />
            </figure>}
            {tag && <span className="rounded bg-accent-default p-1 uppercase text-background ">{tag}</span>}
            <span className="group-data-[has-tag=true]:text-accent-default">{name}</span>
        </button>
        <p className="mt-1 text-secondary group-data-[tag=mod]:text-result-fail group-data-[tag=user]:text-white">
            {replyTo && <span className="text-white text-opacity-80 group-data-[has-tag=true]:text-opacity-100">@{replyTo.user_name}</span>} {message}
        </p>
        <AnimatePresence>
            {
                isMessageMenuVisible && <MessageMenu onClickReply={onClickReply} user={user}/>
            }
        </AnimatePresence>
    </motion.div>;

type MessageMenuProps = Pick<MessageProps, "onClickReply"|"user">;

export const MessageMenu = ({ onClickReply, user }: MessageMenuProps) =>
    <motion.div
        className="flex gap-2 "
        variants={messageMenuVariants}
        initial="initial" animate="show" exit="exit"
    >
        {user && <Button variant="secondary" size="compact" className="mt-2 px-4" onClick={() => onClickReply(user)}>Reply</Button>}
        <Button variant="secondary" size="compact" className="mt-2 px-4">Mute</Button>
    </motion.div>;
