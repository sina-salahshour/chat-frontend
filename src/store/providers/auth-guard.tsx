"use client";

import { type PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "store/redux/hooks";
import { useIsHydrated } from "hooks/use-is-hydrated";
import { useRouter } from "next/navigation";

export const AuthGuard = ({ children }: PropsWithChildren) => {
    const isHydrated = useIsHydrated();
    const router = useRouter();
    const user = useAppSelector((state) => state.user.user);
    useEffect(() => {
        if (isHydrated && !user) {
            router.push("/");
        }
    }, [ isHydrated, router, user ]);
    if (!isHydrated) {
        return null;
    };
    if (user) {
        return children;
    } else {
        return null;
    };
};
