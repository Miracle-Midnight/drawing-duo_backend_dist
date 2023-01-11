/// <reference types="multer" />
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Image } from 'src/room/entities/image.entity';
import { Profile } from './entities/profile.entity';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private userRepository;
    private imageRepository;
    private profileRepository;
    private readonly configService;
    private readonly awsS3;
    readonly S3_BUCKET_NAME: string;
    constructor(userRepository: Repository<User>, imageRepository: Repository<Image>, profileRepository: Repository<Profile>, configService: ConfigService);
    GetUserId(userDto: UserDto, res: Response): Promise<void>;
    signUp(userDto: UserDto, folder: string, file: Express.Multer.File): Promise<{
        nickname: string;
        userid: number;
        image: string;
        level: number;
        rank: number;
        introduction: string;
    }>;
    uploadImg(UserDto: any, file: Express.Multer.File): Promise<Image>;
}
