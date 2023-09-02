import type { UserDto } from "types/dtos/user/user.dto";
import type { WsRPCRequestDto } from "types/dtos/websocket/request.dto";

export interface WsChatMessageReplyToDto {
    id: number; // The message's identification number
    user: UserDto | null; // Contains information about the user who sent this message, described above
    message: string; // Contains the body of the message
    date: string; // Contains the date and time at which this message was sent in ISO 8601 format
}

export interface WsChatMessageDto extends WsChatMessageReplyToDto {
    reply_to: WsChatMessageReplyToDto | null; // Contains the message that this new message is a reply to, or `null` if this isnt a reply message. The type of this property will be discussed later
}

export interface WsChatMessageSendDto extends WsRPCRequestDto {
    message: string; // The body of the message to send
    reply_to?: number; // The identification number of the message that this message replies to
}
