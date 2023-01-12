import { Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: Payload): Promise<User>;
}
export {};
