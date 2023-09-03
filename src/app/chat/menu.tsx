import { AnimatePresence, motion } from "framer-motion";
import { Button } from "components/button";
import { Card } from "components/card";
import { IconButton } from "components/icon-button";
import { Modal } from "components/modal";
import ChatIcon from "assets/icons/chat.svg";
import CloseIcon from "assets/icons/close.svg";
import HideIcon from "assets/icons/hide.svg";
import InfoIcon from "assets/icons/info.svg";
import MuteIcon from "assets/icons/mute.svg";
import React, { useState } from "react";
import type { Variants } from "framer-motion";

const menuVariants = {
    show: {
        height: "auto",
        opacity: 1,
    },
    hide: {
        height: 0,
        opacity: 0,
    },
} satisfies Variants;

export interface MenuProps {
    show: boolean;
    onHideChat: () => void;
}
export const Menu = ({ show, onHideChat }: MenuProps) =>
    <AnimatePresence>
        {
            show && (
                <motion.div className="overflow-hidden" variants={menuVariants} initial="hide" animate="show" exit="hide">
                    <MenuItems onHideChat={onHideChat} />
                </motion.div>
            )
        }
    </AnimatePresence>;

export const MenuItems = ({ onHideChat }: Pick<MenuProps, "onHideChat">) => {
    const [ isGroupInfoVisible, setGroupInfoVisible ] = useState(false);

    return <div className="mb-6 flex flex-col gap-4 rounded-lg bg-black bg-opacity-50 p-6" >

        <IconButton icon={MuteIcon} >Muted Users</IconButton>
        <IconButton icon={InfoIcon} onClick={() => setGroupInfoVisible(true)}>Chat Rules</IconButton>
        <IconButton icon={HideIcon} onClick={onHideChat}>Hide Chat</IconButton>
        <Modal show={isGroupInfoVisible} onHide={() => setGroupInfoVisible(false)}>
            <Card className="flex h-base-height flex-col gap-6">
                <div className="relative">
                    <h1 className="text-center text-sm font-semibold leading-[18px] text-white">Chat Rules</h1>
                    <IconButton
                        icon={CloseIcon}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        onClick={() => setGroupInfoVisible(false)}
                    />
                </div>
                <div className="flex w-full items-center justify-center rounded-lg bg-background p-4">
                    <ChatIcon className="h-10 w-10" />
                </div>
                <div className="text-xs font-semibold text-secondary">
                    <p className="mb-2">No use of offensive or toxic language towards other users or moderators.</p>
                    <p className="mt-0.5">Not adhering to the rules can result in temporary or permanent ban from the group chat.</p>
                </div>

                <Button
                    variant="secondary"
                    onClick={() => setGroupInfoVisible(false)}
                    className="mt-auto">Alright</Button>
            </Card>
        </Modal>
    </div>;
};
