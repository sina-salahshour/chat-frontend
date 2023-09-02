import type { MeDto } from "types/dtos/user/me.dto";

export interface AuthenticationTokenDto {
    token: string; // The issued and signed JWToken
    user: MeDto; // The current user's information, will be discussed later
}
