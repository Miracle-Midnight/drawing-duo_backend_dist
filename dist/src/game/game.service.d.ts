import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { GameUserReadyDto } from './dto/game-user-ready.dto';
export declare class GameService {
    private gameRepository;
    private roomRepository;
    private userRepository;
    constructor(gameRepository: Repository<Game>, roomRepository: Repository<Room>, userRepository: Repository<User>);
    userReady(gameUserReadyDto: GameUserReadyDto): Promise<{
        cnt: number;
    }>;
    createGame(id: number): Promise<{
        gameid: number;
    }>;
    deleteGame(id: number): Promise<Game>;
}
