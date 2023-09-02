"use client";

import { Provider } from "react-redux";
import { store } from "store/redux/store";
import React from "react";
import type { PropsWithChildren } from "react";

export const ReduxProvider = ({ children }: PropsWithChildren) =>
    (<Provider store={store}>{children}</Provider>);

