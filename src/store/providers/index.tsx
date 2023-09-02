import { ReduxProvider } from "./redux-provider";
import { Toaster } from "react-hot-toast";
import React, { type PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) =>
    (<><ReduxProvider>{children}
    </ReduxProvider>
    <Toaster />
    </>);
