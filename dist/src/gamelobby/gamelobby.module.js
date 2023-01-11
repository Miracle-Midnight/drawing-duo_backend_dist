"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamelobbyModule = void 0;
const common_1 = require("@nestjs/common");
const gamelobby_controller_1 = require("./gamelobby.controller");
const gamelobby_service_1 = require("./gamelobby.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const room_entity_1 = require("../room/entities/room.entity");
let GamelobbyModule = class GamelobbyModule {
};
GamelobbyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, room_entity_1.Room])],
        controllers: [gamelobby_controller_1.GamelobbyController],
        providers: [gamelobby_service_1.GamelobbyService],
    })
], GamelobbyModule);
exports.GamelobbyModule = GamelobbyModule;
//# sourceMappingURL=gamelobby.module.js.map