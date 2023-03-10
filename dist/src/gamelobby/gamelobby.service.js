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
exports.GamelobbyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const room_entity_1 = require("../room/entities/room.entity");
let GamelobbyService = class GamelobbyService {
    constructor(userRepository, roomRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
    }
    async userReady(userReadyDto) {
        const { userid, roomid } = userReadyDto;
        const user = await this.userRepository.findOneBy({ id: userid });
        console.log(user);
        if (user.ready == true) {
            user.ready = false;
        }
        else {
            user.ready = true;
        }
        await this.userRepository.save(user);
        const room = await this.roomRepository.findOne({
            where: { id: roomid },
            relations: ['users', 'images'],
        });
        console.log(room);
        let cnt = 0;
        room.users.forEach((user) => {
            if (user.ready) {
                cnt++;
            }
        });
        return { cnt: cnt };
    }
};
GamelobbyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GamelobbyService);
exports.GamelobbyService = GamelobbyService;
//# sourceMappingURL=gamelobby.service.js.map