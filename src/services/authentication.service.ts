"use client";

import { HttpService } from "./http.service";
import type { AuthenticationTokenDto } from "types/dtos/authentication/token.dto";
import type { MeDto } from "types/dtos/user/me.dto";
import type { RegisterDto } from "types/dtos/authentication/register.dto";

export class AuthenticationService {
    public constructor(private httpService = new HttpService()) {}
    public register = async (dto: RegisterDto): Promise<AuthenticationTokenDto> => {
        const response = await this.httpService.post("auth/me", {
            body: JSON.stringify(dto),
        });
        if (response.ok) {
            return await response.json() as AuthenticationTokenDto;
        };
        throw new Error("authentication failed");
    };
    public getInfo = async (): Promise<MeDto> => {
        const response = await this.httpService.get("auth/me");
        if (response.ok) {
            return await response.json() as MeDto;
        };
        throw new Error("authentication failed");
    };
}
