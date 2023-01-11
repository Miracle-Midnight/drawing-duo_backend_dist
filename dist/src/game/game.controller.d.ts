import { GameUserReadyDto } from './dto/game-user-ready.dto';
import { GameService } from './game.service';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    userReady(gameUserReadyDto: GameUserReadyDto): Promise<{
        cnt: number;
    }>;
    createGame(id: number): Promise<{
        gameid: number;
    }>;
    deleteGame(id: number): Promise<import("./entities/game.entity").Game>;
}
