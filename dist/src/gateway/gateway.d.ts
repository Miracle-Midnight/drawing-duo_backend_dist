import { Socket } from 'socket.io';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { DrawLine } from './dto/gateway.dto';
export declare class ChatsAndDrawGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private userRepository;
    private logger;
    constructor(userRepository: Repository<User>);
    handleDisconnect(socket: Socket): Promise<void>;
    handleConnection(socket: Socket): void;
    afterInit(): void;
    handleNewUser(data: {
        userid: number;
        message: string;
    }, socket: Socket): Promise<void>;
    handleCanvasState(state: any, socket: Socket): void;
    handleDrawLine({ prevPoint, currentPoint, color }: DrawLine, socket: Socket): void;
    handleClear(socket: Socket): void;
}
