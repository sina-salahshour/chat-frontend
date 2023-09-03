import React from "react";

import { useAppSelector } from "store/redux/hooks";
import StatusOnline from "assets/icons/status-online.svg";

export const OnlineUsers = () => {
    const userCount = useAppSelector((state) => state["user-count"].count);
    return <h2 className="flex items-center text-xs font-semibold text-white">
        <StatusOnline className="mr-0.5" />
        <div className="ml-2">Online Users</div>
        <div className="ml-4">{userCount}</div>
    </h2>;
};
