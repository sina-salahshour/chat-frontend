import { Button } from "components/button";
import { Card } from "components/card";
import { TextField } from "components/text-field";
import React from "react";
import UserIcon from "assets/icons/user.svg";

export const Home = () => (
    <main className="flex h-[100dvh] flex-col items-center justify-center">
        <Card className="mx-auto flex min-h-[480px] flex-col gap-6">
            <h1 className="text-center text-sm font-semibold leading-[18px] text-white">Welcome</h1>
            <div className="flex w-full items-center justify-center rounded-lg bg-background p-4">
                <UserIcon className="h-10 w-10" />
            </div>
            <h2 className="text-xs font-semibold text-secondary">Choose a username to enter chat.</h2>
            <TextField title="Username" placeholder="Default" />
            <Button className="mt-auto" disabled>Sign In</Button>
        </Card>
    </main>
);

export default Home;
