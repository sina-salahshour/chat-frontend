"use client";

import { Button } from "components/button";
import { Card } from "components/card";
import { motion } from "framer-motion";
import { TextField } from "components/text-field";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import UserIcon from "assets/icons/user.svg";
import type { Variants } from "framer-motion";

const pageTransitions = {
    enter: {
        opacity: 0,
        scale: .9,
        transition: {
            ease: "easeIn",
            duration: .1,
        },
    },
    idle: {
        opacity: 1,
        scale: 1,

    },
    exit: {
        opacity: 0,
        scale: .9,
        transition: {
            ease: "easeOut",
            duration: .1,
        },

    },
} satisfies Variants;

export const Home = () => {
    const [ transitionState, setTransitionState ] = useState<keyof typeof pageTransitions>("idle");
    const router = useRouter();
    const handleLogin = () => {
        setTransitionState("exit");
    };
    const handleRouteChange = () => {
        if (transitionState === "exit") {
            router.push("/chat");
        };
    };
    return (
        <motion.main onAnimationComplete={handleRouteChange} variants={pageTransitions} initial="enter" animate={transitionState} className="flex h-[100dvh] flex-col items-center justify-center">
            <Card className="mx-auto flex min-h-[480px] flex-col gap-6">
                <h1 className="text-center text-sm font-semibold leading-[18px] text-white">Welcome</h1>
                <div className="flex w-full items-center justify-center rounded-lg bg-background p-4">
                    <UserIcon className="h-10 w-10" />
                </div>
                <h2 className="text-xs font-semibold text-secondary">Choose a username to enter chat.</h2>
                <TextField title="Username" placeholder="Default" />
                <Button className="mt-auto" onClick={handleLogin}>Sign In</Button>
            </Card>
        </motion.main>
    );
};

export default Home;
