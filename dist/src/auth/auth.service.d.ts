import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginREquestDto } from './dto/login.request.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private JwtService;
    constructor(userRepository: Repository<User>, JwtService: JwtService);
    jwtLogIn(data: LoginREquestDto): Promise<{
        token: string;
        userid: number;
        username: string;
        nickname: string;
        level: number;
        rank: number;
        introduction: string;
        image: string;
    }>;
}
