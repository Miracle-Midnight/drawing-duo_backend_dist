"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("../room/entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
const lobby_controller_1 = require("./lobby.controller");
const lobby_service_1 = require("./lobby.service");
const image_entity_1 = require("../room/entities/image.entity");
let LobbyModule = class LobbyModule {
};
LobbyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, room_entity_1.Room, image_entity_1.Image])],
        controllers: [lobby_controller_1.LobbyController],
        providers: [lobby_service_1.LobbyService],
    })
], LobbyModule);
exports.LobbyModule = LobbyModule;
//# sourceMappingURL=lobby.module.js.map