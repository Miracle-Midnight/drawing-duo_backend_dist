import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { EnterRoomDto } from './dto/enter-room.dto';
import { Image } from 'src/room/entities/image.entity';
export declare class LobbyService {
    private userRepository;
    private roomRepository;
    private imageRepository;
    constructor(userRepository: Repository<User>, roomRepository: Repository<Room>, imageRepository: Repository<Image>);
    getLobby(): Promise<Room[]>;
    inRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
    outRoom(enterRoomDto: EnterRoomDto): Promise<{
        userNickName: string;
    }>;
}
