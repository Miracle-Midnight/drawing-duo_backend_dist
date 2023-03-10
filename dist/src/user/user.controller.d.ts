/// <reference types="multer" />
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    signUp(file: Express.Multer.File, userDto: UserDto): Promise<{
        nickname: string;
        userid: number;
        image: string;
        level: number;
        rank: number;
        introduction: string;
    }>;
    GetUserId(userDto: UserDto): Promise<{
        token: string;
        userid: number;
        nickname: string;
        image: string;
        room: import("../room/entities/room.entity").Room;
    }>;
    uploadFile(files: Array<Express.Multer.File>, userDto: any): Promise<import("../room/entities/image.entity").Image>;
}
