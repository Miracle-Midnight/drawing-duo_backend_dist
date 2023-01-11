import { Profile } from '../entities/profile.entity';
export declare class UserDto {
    userid: string;
    password: string;
    nickname: string;
    type: boolean;
    ready: boolean;
    profile: Profile;
}
