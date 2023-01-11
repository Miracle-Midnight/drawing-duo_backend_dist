import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Room } from 'src/room/entities/room.entity';
import { UserReadyDto } from './dto/user-ready.dto';
export declare class GamelobbyService {
    private userRepository;
    private roomRepository;
    constructor(userRepository: Repository<User>, roomRepository: Repository<Room>);
    userReady(userReadyDto: UserReadyDto): Promise<{
        cnt: number;
    }>;
}
