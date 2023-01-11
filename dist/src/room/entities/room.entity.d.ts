import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from 'typeorm';
import { Image } from './image.entity';
export declare class Room extends BaseEntity {
    id: number;
    title: string;
    users: User[];
    images: Image[];
}
