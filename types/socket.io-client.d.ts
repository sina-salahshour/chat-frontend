export declare module "socket.io-client" {
    export interface Socket {
        on: <T>(event: string, cb: (payload: T) => void) => void;
        emit: (event: string, payload: unknown) => void;
    }

    interface IOOptions {
        path: string;
        transports: string[];
        query: Record<string, unknown>;
    }
    function io(url?: string, options?: IOOptions): Socket;
    export = io;
}
