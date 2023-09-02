import "configs/globals.css";
import { cn } from "utils/cn";
import { Montserrat } from "next/font/google";
import { Providers } from "store/providers";
import React from "react";
import type { Metadata } from "next";

const montserrat = Montserrat({ subsets: [ "latin" ] });

export const metadata: Metadata = {
    title: "Chat test",
    description: "a simple chat application using socket.io",
};

const RootLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <html lang="en">
        <body className={cn(montserrat.className, "bg-background")}>
            <Providers>{children}</Providers>
        </body>
    </html>
);
export default RootLayout;
