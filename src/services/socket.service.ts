import type { Socket } from "socket.io-client";
import type { SocketEmitter, SocketEmitterMapping, SocketListener, SocketListenerMapping } from "types/dtos/websocket/mapping";

export class SocketService {
    public constructor(private socket: Socket) {}

    public emit = <T extends SocketEmitter>(
        emitter: T,
        payload: SocketEmitterMapping[T]) =>
        this.socket.emit(emitter, payload);
    public on = <T extends SocketListener>(
        listener: T,
        cb: (result: SocketListenerMapping[T]) => void) =>
        this.socket.on(listener, cb);
}
