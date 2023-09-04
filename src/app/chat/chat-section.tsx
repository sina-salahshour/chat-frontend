"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "components/button";
import { chatSelectors } from "store/redux/reduders/chat-reducer";
import { Message } from "./message";
import { SocketEmitter } from "types/dtos/websocket/mapping";
import { TextField } from "components/text-field";
import { useAppSelector } from "store/redux/hooks";
import { useSocketService } from "store/providers/socket-provider";
import { v4 } from "uuid";
import React, { useMemo, useRef, useState } from "react";
import SendIcon from "assets/icons/send.svg";
import type { UserDto } from "types/dtos/user/user.dto";
import type { Variants } from "framer-motion";

const chatSectionVariants = {
    show: { height: "auto", opacity: 1 },
    hide: { height: 0, opacity: 0 },
} satisfies Variants;

export const ChatSection = () => {
    const messages = useAppSelector(chatSelectors.selectAll);
    const socketService = useSocketService();
    const textFieldRef = useRef<HTMLInputElement>(null);
    const [ messageBox, setMessageBox ] = useState("");
    const [ replyUser, setReplyUser ] = useState<UserDto | undefined>();
    const [ chatMenuId, setChatMenuId ] = useState<number>();

    const handleOpenChatMenu = (messageId: number) => {
        setChatMenuId((prev) => prev === messageId ? -1 : messageId);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const textId = `@${replyUser?.user_name} `;
        if (!replyUser) {
            setMessageBox(value);
        } else if (value.startsWith(textId)) {
            setMessageBox(value.substring(textId.length));
        } else {
            setMessageBox("");
            setReplyUser(undefined);
        }
    };
    const textInputValue = useMemo(() => {
        let value = "";
        if (replyUser) {
            value += `@${replyUser.user_name} `;
        }
        value += messageBox;
        return value;
    }, [ messageBox, replyUser ]);

    const handleReply = (user?: UserDto) => {
        setReplyUser(user);
        setChatMenuId(-1);
        textFieldRef.current?.focus();
    };
    return <>
        <motion.div variants={chatSectionVariants}
            initial="hide" animate="show" exit="hide" className="h-full flex-1 overflow-y-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-accent-default"
        >
            <div className="flex flex-1 flex-col gap-4 overflow-x-hidden scrollbar-none">
                <AnimatePresence>

                    {
                        messages.map((message) => <Message
                            key={message.id}
                            user={message.user || undefined}
                            message={message.message}
                            name={message.user?.user_name || "Admin"}
                            profile={message.user?.user_avatar}
                            replyTo={message.reply_to?.user }
                            tag={message.user === null ? "mod" : "user"}
                            onClickReply={handleReply}
                            isMessageMenuVisible={chatMenuId === message.id}
                            toggleMessageMenuVisibility={() => handleOpenChatMenu(message.id)}
                        />)
                    }
                </AnimatePresence>
            </div>
        </motion.div>
        <motion.form
            variants={chatSectionVariants}
            initial="hide" animate="show" exit="hide"
            className="mt-10 flex gap-[10px]" onSubmit={(e) => {
                e.preventDefault();
                if (messageBox) {
                    socketService?.emit(SocketEmitter.ChatSendMessage, {
                        key: v4(),
                        message: messageBox,
                        reply_to: replyUser?.user_id,
                    });
                    setMessageBox("");
                    setReplyUser(undefined);
                }
            }}

        >
            <TextField ref={textFieldRef} className="flex-1" value={textInputValue} onChange={handleFormChange} />
            <Button
                disabled={!messageBox}
                size="custom"
                variant="secondary"
                className="h-10 w-10"
            >
                <SendIcon />
            </Button>
        </motion.form>
    </>;
};
