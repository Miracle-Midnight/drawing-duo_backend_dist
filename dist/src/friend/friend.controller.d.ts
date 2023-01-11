import { FriendService } from './friend.service';
export declare class FriendController {
    private readonly friendService;
    constructor(friendService: FriendService);
    getFriend(userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
    serchUser(friendname: string): Promise<{
        friendId: number;
        friendName: string;
    }>;
    addFriend(userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
}
