import type { WsChatJoinDto, WsChatJoinedDto } from "types/dtos/chat/join.dto";
import type { WsChatMessageDto, WsChatMessageSendDto } from "types/dtos/chat/message.dto";
import type { WsChatStatusDto } from "types/dtos/chat/status.dto";
import type { WsRPCExceptionDto } from "./exception.dto";
import type { WsRPCResponseDto } from "./response.dto";

export enum SocketListener {
    ChatJoinResult = "CHAT_JOIN_RESULT",
    ChatStatus = "CHAT_STATUS",
    ChatMessage = "CHAT_MESSAGE",
    ChatSendMessageResult = "CHAT_SEND_MESSAGE_RESULT",
    Exception = "exception"
}

export interface SocketListenerMapping {
    [SocketListener.ChatJoinResult]: WsRPCResponseDto<WsChatJoinedDto>;
    [SocketListener.ChatStatus]: WsChatStatusDto;
    [SocketListener.ChatMessage]: WsChatMessageDto;
    [SocketListener.ChatSendMessageResult]: WsRPCResponseDto<WsChatMessageDto>;
    [SocketListener.Exception]: WsRPCExceptionDto;
}

export enum SocketEmitter {
    ChatJoin = "CHAT_JOIN",
    ChatSendMessage = "CHAT_SEND_MESSAGE"
}

export interface SocketEmitterMapping {
    [SocketEmitter.ChatJoin]: WsChatJoinDto;
    [SocketEmitter.ChatSendMessage]: WsChatMessageSendDto;
}
