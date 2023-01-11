import { GamelobbyService } from './gamelobby.service';
import { UserReadyDto } from './dto/user-ready.dto';
export declare class GamelobbyController {
    private readonly gameLobbyService;
    constructor(gameLobbyService: GamelobbyService);
    userReady(userReadyDto: UserReadyDto): Promise<{
        cnt: number;
    }>;
}
