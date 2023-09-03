import { AuthGuard } from "store/providers/auth-guard";
import { SocketProvider } from "store/providers/socket-provider";
import React from "react";
import type { PropsWithChildren } from "react";

const ChatLayout = ({ children }: PropsWithChildren) => <AuthGuard><SocketProvider>{children}</SocketProvider></AuthGuard>;
export default ChatLayout;
