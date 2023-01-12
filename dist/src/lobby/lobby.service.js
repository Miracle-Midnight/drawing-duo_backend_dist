"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("../room/entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("../room/entities/image.entity");
let LobbyService = class LobbyService {
    constructor(userRepository, roomRepository, imageRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
        this.imageRepository = imageRepository;
    }
    async inRoom(enterRoomDto) {
        const { userid, roomid } = enterRoomDto;
        const checkUser = await this.roomRepository.findOne({
            where: { id: roomid },
            relations: ['users'],
        });
        if (checkUser.users.length >= 2) {
            throw new common_1.ForbiddenException('방이 꽉 찼습니다.');
        }
        const targetRoom = await this.roomRepository.findOne({
            where: { id: roomid },
            relations: ['users'],
        });
        if (!targetRoom)
            throw new common_1.NotFoundException('방이 존재하지 않습니다.');
        const userinfo = await this.userRepository.findOne({
            where: { id: userid },
            relations: ['room', 'profile'],
        });
        if (!userinfo)
            throw new common_1.NotFoundException('유저가 존재하지 않습니다.');
        userinfo.room = targetRoom;
        await this.userRepository.save(userinfo);
        return { userNickName: userinfo.profile.nickname };
    }
    async outRoom(enterRoomDto) {
        const { userid, roomid } = enterRoomDto;
        const userinfo = await this.userRepository.findOne({
            where: { id: userid },
            relations: ['room', 'profile'],
        });
        if (!userinfo.room) {
            throw new common_1.ForbiddenException('방에 입장하지 않았습니다.');
        }
        userinfo.room = null;
        await this.userRepository.save(userinfo);
        return { userNickName: userinfo.profile.nickname };
    }
};
LobbyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __param(2, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LobbyService);
exports.LobbyService = LobbyService;
//# sourceMappingURL=lobby.service.js.map