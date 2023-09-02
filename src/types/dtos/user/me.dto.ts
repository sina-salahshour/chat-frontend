import type { UserDto } from "./user.dto";

export interface MeDto extends UserDto {
    created: string; // The user's registration date in ISO 8601 format
}
