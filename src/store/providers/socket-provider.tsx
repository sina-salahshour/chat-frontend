"use client";

import { addMessage, addMessages } from "store/redux/reduders/chat-reducer";
import { ls } from "services/localstorage.service";
import { setUserCount } from "store/redux/reduders/user-count-reducer";
import { SocketEmitter, SocketListener } from "types/dtos/websocket/mapping";
import { SocketService } from "services/socket.service";
import { toast } from "react-hot-toast";
import { TokenKey } from "configs/constants";
import { useAppDispatch } from "store/redux/hooks";
import { useIsHydrated } from "hooks/use-is-hydrated";
import { v4 } from "uuid";
import io from "socket.io-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

const SocketContext = createContext<SocketService | undefined>(undefined);

export const SocketProvider = ({ children }: PropsWithChildren) => {
    const [ socket, setSocket ] = useState<SocketService>();
    const isHydrated = useIsHydrated();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isHydrated && !socket) {
            const socketService = new SocketService(io(process.env.NEXT_PUBLIC_APP_API_URL, {
                path: "/ws",
                transports: [ "websocket" ],
                query: {
                    jwt: ls.get(TokenKey),
                },
            }));
            setSocket(socketService);
            socketService.on(SocketListener.ChatJoinResult, (result) => {
                dispatch(addMessages(result.result.messages));
            });
            socketService.on(SocketListener.ChatMessage, (result) => {
                dispatch(addMessage(result));
            });
            socketService.on(SocketListener.ChatStatus, (result) => {
                dispatch(setUserCount(result.users));
            });
            socketService.on(SocketListener.Exception, (result) => {
                toast.error(result.error);
            });
            socketService.emit(SocketEmitter.ChatJoin, {
                key: v4(),
            });
        }
    }, [ socket, dispatch, isHydrated ]);
    return <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>;
};

export const useSocketService = () => useContext(SocketContext);
