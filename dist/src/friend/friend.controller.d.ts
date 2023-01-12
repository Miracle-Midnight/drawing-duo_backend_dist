import { FriendService } from './friend.service';
export declare class FriendController {
    private readonly friendService;
    constructor(friendService: FriendService);
    getFriend(req: any, userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
    serchUser(req: any, friendname: string): Promise<{
        friendId: number;
        friendName: string;
    }>;
    addFriend(userDto: any): Promise<{
        id: number;
        userid: string;
    }[]>;
}
