"use client";

import { useAppSelector } from "store/redux/hooks";
import { useIsHydrated } from "hooks/use-is-hydrated";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

export const AuthGuard = ({ children }: PropsWithChildren) => {
    const isHydrated = useIsHydrated();
    const router = useRouter();
    const user = useAppSelector((state) => state.user.user);

    if (!isHydrated) {
        return null;
    };
    if (user) {
        return children;
    } else {
        router.push("/");
        return null;
    };
};
