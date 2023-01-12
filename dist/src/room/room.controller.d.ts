import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { SelectImageDto } from './dto/select-image.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getAllImage(): Promise<import("./entities/image.entity").Image[]>;
    selectImage(selectImageDto: SelectImageDto): Promise<import("./entities/room.entity").Room>;
    createRoom(id: number, createRoomDto: CreateRoomDto): Promise<{
        roomid: number;
        title: string;
        userNickName: string;
    }>;
    deleteRoom(id: number): Promise<import("./entities/room.entity").Room>;
}
