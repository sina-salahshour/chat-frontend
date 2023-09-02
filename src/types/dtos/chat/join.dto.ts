import type { WsChatMessageDto } from "./message.dto";
import type { WsChatStatusDto } from "./status.dto";
import type { WsRPCRequestDto } from "types/dtos/websocket/request.dto";

export type WsChatJoinDto = WsRPCRequestDto;

export interface WsChatJoinedDto extends WsChatStatusDto {
    messages: WsChatMessageDto[]; // Contains the list of last messages sent to the chat used by the client to render the chat's message panel. The type of this property will be discussed later
}
