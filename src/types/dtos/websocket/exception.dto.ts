export interface WsRPCExceptionDto {
    status_code: number; // Similiar to the HTTP status code, contains a number indicating the type of response recieved
    message: string; // Similiar to the HTTP status, contains a phrase describing the type of response recieved
    key: string; // Contains the same key used in the correspanding request
    error: string; // Contains the actual message of the error, can be used to notify user of the reason behind the failure or logged in one way or another
    error_code?: string; // Contains an optional error code reported by the method raising this error,
    // only available for service exception, a service exception is a custom exception that simply contains an error code
}
