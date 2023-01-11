import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class FriendService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    serchUser(friendname: string): Promise<{
        friendId: number;
        friendName: string;
    }>;
    addFriend(userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
    getFriendList(userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
    readonly childuserFilter: (user: User) => {
        id: number;
        userid: string;
    };
}
