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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const positiveInt_pipe_1 = require("../common/pipes/positiveInt.pipe");
const game_user_ready_dto_1 = require("./dto/game-user-ready.dto");
const game_service_1 = require("./game.service");
const decorators_1 = require("@nestjs/common/decorators");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    userReady(gameUserReadyDto) {
        return this.gameService.userReady(gameUserReadyDto);
    }
    createGame(id) {
        return this.gameService.createGame(id);
    }
    deleteGame(id) {
        return this.gameService.deleteGame(id);
    }
};
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_user_ready_dto_1.GameUserReadyDto]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "userReady", null);
__decorate([
    (0, common_1.Post)('create/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe, positiveInt_pipe_1.PositiveIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "createGame", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe, positiveInt_pipe_1.PositiveIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "deleteGame", null);
GameController = __decorate([
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map