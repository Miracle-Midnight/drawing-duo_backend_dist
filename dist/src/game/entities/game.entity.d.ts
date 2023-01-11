import { BaseEntity } from 'typeorm';
import { Room } from 'src/room/entities/room.entity';
export declare class Game extends BaseEntity {
    id: number;
    room: Room;
}
