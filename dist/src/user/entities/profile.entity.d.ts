import { Image } from 'src/room/entities/image.entity';
import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class Profile extends BaseEntity {
    id: number;
    nickname: string;
    level: number;
    rank: number;
    introduction: string;
    user: User;
    image: Image;
}
