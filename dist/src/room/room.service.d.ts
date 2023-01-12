import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from './entities/image.entity';
import { SelectImageDto } from './dto/select-image.dto';
export declare class RoomService {
    private roomRepository;
    private userRepository;
    private imageRepository;
    constructor(roomRepository: Repository<Room>, userRepository: Repository<User>, imageRepository: Repository<Image>);
    getAllImage(): Promise<Image[]>;
    selectImage(selectImageDto: SelectImageDto): Promise<Room>;
    createRoom(id: number, createRoomDto: CreateRoomDto): Promise<{
        roomid: number;
        title: string;
        userNickName: string;
    }>;
    deleteRoom(id: number): Promise<Room>;
}
