import React from "react";

import StatusOnline from "assets/icons/status-online.svg";

export const OnlineUsers = () =>
    <h2 className="flex items-center text-xs font-semibold text-white">
        <StatusOnline className="mr-0.5" />
        <div className="ml-2">Online Users</div>
        <div className="ml-4">246</div>
    </h2>;
