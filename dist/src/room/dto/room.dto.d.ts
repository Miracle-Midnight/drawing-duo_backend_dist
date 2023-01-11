import { Room } from '../entities/room.entity';
declare const ReadOnlyRoomDto_base: import("@nestjs/common").Type<Pick<Room, "id" | "title">>;
export declare class ReadOnlyRoomDto extends ReadOnlyRoomDto_base {
    userNickName: string;
}
export {};
