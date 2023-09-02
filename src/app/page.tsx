"use client";

import { AuthenticationService } from "services/authentication.service";
import { Button } from "components/button";
import { Card } from "components/card";
import { ls } from "services/localstorage.service";
import { motion } from "framer-motion";
import { setUser } from "store/redux/reduders/user-reducer";
import { TextField } from "components/text-field";
import { toast } from "react-hot-toast";
import { TokenKey } from "configs/constants";
import { useAppDispatch } from "store/redux/hooks";
import { useIsHydrated } from "hooks/use-is-hydrated";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import UserIcon from "assets/icons/user.svg";
import type { FormEvent } from "react";
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
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isHydrated = useIsHydrated();
    const authenticationService = useMemo(() => new AuthenticationService(), []);
    const [ transitionState, setTransitionState ] = useState<keyof typeof pageTransitions>("idle");
    const [ value, setValue ] = useState("");
    const [ formState, setFormState ] = useState<"idle" | "pending">("idle");

    const handleLogin = useMemo(() => async () => {
        const isAuthenticated = ls.get(TokenKey);
        if (isAuthenticated) {
            const userInfo = await authenticationService.getInfo();
            dispatch(setUser(userInfo));
        } else {
            const authenticationResponse = await authenticationService.register({ user_name: value });
            ls.set(TokenKey, authenticationResponse.token);
            dispatch(setUser(authenticationResponse.user));
        }
        setTransitionState("exit");
    }, [ authenticationService, dispatch, value ]);
    const handleLoginSubmitForm = async (e: FormEvent<unknown>) => {
        e.preventDefault();
        try {
            setFormState("pending");
            await toast.promise(handleLogin(), {
                loading: "Signing In...",
                error: "Sign In Failed. Please try again later.",
                success: "Sign In Successfull!",
            });
        } finally {
            setFormState("idle");
        }
    };
    const handleRouteChange = () => {
        if (transitionState === "exit") {
            router.push("/chat");
        };
    };
    useEffect(() => {
        if (isHydrated && ls.get(TokenKey)) {
            void handleLogin();
        }
    }, [ isHydrated, router, handleLogin ]);
    const isButtonDisabled = !value || formState === "pending";
    return (
        <motion.main onAnimationComplete={handleRouteChange} variants={pageTransitions} initial="enter" animate={transitionState} className="flex h-[100dvh] flex-col items-center justify-center">
            <form onSubmit={(e) => void handleLoginSubmitForm(e)}>
                <Card className="mx-auto flex min-h-[480px] flex-col gap-6">
                    <h1 className="text-center text-sm font-semibold leading-[18px] text-white">Welcome</h1>
                    <div className="flex w-full items-center justify-center rounded-lg bg-background p-4">
                        <UserIcon className="h-10 w-10" />
                    </div>
                    <h2 className="text-xs font-semibold text-secondary">Choose a username to enter chat.</h2>
                    <TextField value={value} onChange={(e) => setValue(e.target.value)} title="Username" placeholder="Default" />
                    <Button className="mt-auto" disabled={isButtonDisabled}>Sign In</Button>
                </Card>
            </form>
        </motion.main>
    );
};

export default Home;
