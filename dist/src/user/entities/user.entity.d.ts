import { BaseEntity } from 'typeorm';
import { Profile } from './profile.entity';
import { Room } from '../../room/entities/room.entity';
export declare class User extends BaseEntity {
    id: number;
    type: boolean;
    userid: string;
    socketid: string;
    password: string;
    ready: boolean;
    profile: Profile;
    room: Room;
    parentUser: User;
    childUser: User[];
}
