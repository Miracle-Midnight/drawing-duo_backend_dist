import { EnterRoomDto } from './dto/enter-room.dto';
import { LobbyService } from './lobby.service';
export declare class LobbyController {
    private readonly lobbyService;
    constructor(lobbyService: LobbyService);
    getLobby(): Promise<import("../room/entities/room.entity").Room[]>;
    inRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
    outRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
}
