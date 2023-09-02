import { useEffect, useState } from "react";

export const useIsHydrated = () => {
    const [ isHydrated, setIsHydrated ] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsHydrated(true);
        }
    }, []);
    return isHydrated;
};
