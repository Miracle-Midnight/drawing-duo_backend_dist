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
exports.LobbyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enter_room_dto_1 = require("./dto/enter-room.dto");
const lobby_service_1 = require("./lobby.service");
let LobbyController = class LobbyController {
    constructor(lobbyService) {
        this.lobbyService = lobbyService;
    }
    inRoom(enterRoomDto) {
        return this.lobbyService.inRoom(enterRoomDto);
    }
    outRoom(enterRoomDto) {
        return this.lobbyService.outRoom(enterRoomDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '방 입장' }),
    (0, common_1.Post)('in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enter_room_dto_1.EnterRoomDto]),
    __metadata("design:returntype", void 0)
], LobbyController.prototype, "inRoom", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '방 나가기' }),
    (0, common_1.Post)('out'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enter_room_dto_1.EnterRoomDto]),
    __metadata("design:returntype", void 0)
], LobbyController.prototype, "outRoom", null);
LobbyController = __decorate([
    (0, common_1.Controller)('lobby'),
    __metadata("design:paramtypes", [lobby_service_1.LobbyService])
], LobbyController);
exports.LobbyController = LobbyController;
//# sourceMappingURL=lobby.controller.js.map