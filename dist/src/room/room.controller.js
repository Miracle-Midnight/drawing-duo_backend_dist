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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const room_service_1 = require("./room.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const pipes_1 = require("@nestjs/common/pipes");
const positiveInt_pipe_1 = require("../common/pipes/positiveInt.pipe");
const swagger_1 = require("@nestjs/swagger");
const room_dto_1 = require("./dto/room.dto");
const select_image_dto_1 = require("./dto/select-image.dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    getAllImage() {
        return this.roomService.getAllImage();
    }
    selectImage(selectImageDto) {
        return this.roomService.selectImage(selectImageDto);
    }
    createRoom(id, createRoomDto) {
        return this.roomService.createRoom(id, createRoomDto);
    }
    deleteRoom(id) {
        return this.roomService.deleteRoom(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '이미지 전체 조회' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllImage", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_image_dto_1.SelectImageDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "selectImage", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: '방 생성 성공!',
        type: room_dto_1.ReadOnlyRoomDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '방 생성' }),
    (0, decorators_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe, positiveInt_pipe_1.PositiveIntPipe)),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "createRoom", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe, positiveInt_pipe_1.PositiveIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "deleteRoom", null);
RoomController = __decorate([
    (0, common_1.Controller)('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map