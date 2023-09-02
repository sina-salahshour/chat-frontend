import "configs/globals.css";
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
        <body className={montserrat.className}>
            <Providers>{children}</Providers>
        </body>
    </html>
);
export default RootLayout;
