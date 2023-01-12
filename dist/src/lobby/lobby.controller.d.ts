import { EnterRoomDto } from './dto/enter-room.dto';
import { LobbyService } from './lobby.service';
export declare class LobbyController {
    private readonly lobbyService;
    constructor(lobbyService: LobbyService);
    inRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
    outRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
}
