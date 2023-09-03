"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "components/button";
import { Card } from "components/card";
import { IconButton } from "components/icon-button";
import { ls } from "services/localstorage.service";
import { Menu } from "./menu";
import { OnlineUsers } from "./online-users";
import { pageTransitions, TokenKey } from "configs/constants";
import { TextField } from "components/text-field";
import { useRouter } from "next/navigation";
import LogoutIcon from "assets/icons/logout.svg";
import MenuIcon from "assets/icons/menu.svg";
import React, { useState } from "react";
import SendIcon from "assets/icons/send.svg";
import type { PageTransitionKeys } from "configs/constants";
import type { Variants } from "framer-motion";

;

const headerButtonVariants = {
    show: { opacity: 1 },
    hide: { opacity: 0 },
} satisfies Variants;

const chatSectionVariants = {
    show: { height: "auto", opacity: 1 },
    hide: { height: 0, opacity: 0 },
} satisfies Variants;
const chatButtonVariants = {
    show: { opacity: 1, height: "auto" },
    hide: { opacity: 0, height: 0 },
} satisfies Variants;

const ChatPage = () => {
    const router = useRouter();
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);
    const [ isChatVisible, setIsChatVisible ] = useState(true);
    const [ pageTransitionState, setPageTransitionState ] = useState<PageTransitionKeys>("idle");
    const toggleMenuVisibility = () => setIsMenuVisible((prev) => !prev);
    const hideChat = () => {
        setIsMenuVisible(false);
        setIsChatVisible(false);
    };
    const showChat = () => setIsChatVisible(true);
    const handleLogout = () => {
        ls.remove(TokenKey);
        setPageTransitionState("exit");
    };
    const handleRouteChange = () => {
        if (pageTransitionState === "exit") {
            router.push("/");
        };
    };
    return <motion.main
        onAnimationComplete={handleRouteChange}
        variants={pageTransitions} initial="enter" animate={pageTransitionState}
        className="flex h-[100dvh] flex-col items-center justify-center">
        <Card className="flex max-h-[800px] flex-col">
            <div className="mb-6 flex w-full flex-shrink-0">
                <OnlineUsers />
                <AnimatePresence mode="popLayout">
                    <motion.div variants={headerButtonVariants} initial="hide" exit="hide" animate="show" className="ml-auto" key={String(isChatVisible)}>
                        {
                            isChatVisible ?
                                <IconButton icon={MenuIcon} onClick={toggleMenuVisibility} /> :
                                <IconButton icon={LogoutIcon} onClick={handleLogout} />
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
            <Menu show={isMenuVisible} onHideChat={hideChat} />
            <AnimatePresence mode="sync" >
                {
                    isChatVisible ?
                        <ChatSection key="chat" /> :
                        <motion.div variants={chatButtonVariants} initial="hide" animate="show" exit="hide" key="show-chat">
                            <Button className="w-full" onClick={showChat}>Show Chat</Button>
                        </motion.div>
                }
            </AnimatePresence>
        </Card>
    </motion.main>;
};

export const ChatSection = () =>
    <motion.div variants={chatSectionVariants}
        initial="hide" animate="show" exit="hide"
    >
        <div className="mt-2 flex gap-[10px]">
            <TextField className="flex-1" /> <Button size="custom" variant="secondary" className="h-10 w-10">
                <SendIcon />
            </Button>
        </div>
    </motion.div>;

export default ChatPage;
