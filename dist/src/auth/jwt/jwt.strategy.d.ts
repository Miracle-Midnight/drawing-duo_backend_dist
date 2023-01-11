import { Strategy } from 'passport-jwt';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<User>);
}
export {};
