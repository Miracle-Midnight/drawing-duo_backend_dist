import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { DrawLine } from './dto/gateway.dto';
export declare class MyGateway implements OnModuleInit {
    server: Server;
    onModuleInit(): void;
    onNewMessage(body: any): any;
    onClientReady(): void;
    onCanvasState(state: any): void;
    onDrawLine({ prevPoint, currentPoint, color }: DrawLine): void;
    onClear(): void;
}
