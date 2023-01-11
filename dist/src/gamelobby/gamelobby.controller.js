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
exports.GamelobbyController = void 0;
const common_1 = require("@nestjs/common");
const gamelobby_service_1 = require("./gamelobby.service");
const decorators_1 = require("@nestjs/common/decorators");
const user_ready_dto_1 = require("./dto/user-ready.dto");
let GamelobbyController = class GamelobbyController {
    constructor(gameLobbyService) {
        this.gameLobbyService = gameLobbyService;
    }
    userReady(userReadyDto) {
        return this.gameLobbyService.userReady(userReadyDto);
    }
};
__decorate([
    (0, decorators_1.Patch)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_ready_dto_1.UserReadyDto]),
    __metadata("design:returntype", void 0)
], GamelobbyController.prototype, "userReady", null);
GamelobbyController = __decorate([
    (0, common_1.Controller)('gamelobby'),
    __metadata("design:paramtypes", [gamelobby_service_1.GamelobbyService])
], GamelobbyController);
exports.GamelobbyController = GamelobbyController;
//# sourceMappingURL=gamelobby.controller.js.map