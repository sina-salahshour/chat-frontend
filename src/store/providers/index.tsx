import { ReduxProvider } from "./redux-provider";
import React, { type PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) =>
    (<ReduxProvider>{children}</ReduxProvider>);
