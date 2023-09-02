import { AuthGuard } from "store/providers/auth-guard";
import React from "react";
import type { PropsWithChildren } from "react";

const ChatLayout = ({ children }: PropsWithChildren) => <AuthGuard>{children}</AuthGuard>;
export default ChatLayout;
