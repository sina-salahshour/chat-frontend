export interface WsRPCResponseDto<T> {
    status_code: number; // Similiar to the HTTP status code, contains a number indicating the type of response recieved
    message: string; // Similiar to the HTTP status, contains a phrase describing the type of response recieved
    key: string; // Contains the same key used in the correspanding request
    result: T; // Contains the actual response of the RPC message, the type of this property depends on the type of the response expected from the RPC message sent
}
