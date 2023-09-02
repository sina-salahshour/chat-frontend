export interface WsChatStatusDto {
    last_message: string | null; // Contains the date and time of the last message sent to chat, or `null` of no message is yet recieved by the Chat Service
    users: number; // Contains the number of connected clients to the Chat Service
}
