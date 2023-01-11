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
exports.ChatsAndDrawGateway = void 0;
const socket_io_1 = require("socket.io");
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
let ChatsAndDrawGateway = class ChatsAndDrawGateway {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger('chat');
    }
    async handleDisconnect(socket) {
        this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
    }
    handleConnection(socket) {
        this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
        socket.on('client-ready', () => {
            socket.broadcast.emit('get-canvas-state');
        });
    }
    afterInit() {
        this.logger.log('init');
    }
    async handleNewUser(data, socket) {
        const user = await this.userRepository.findOne({
            where: { id: data.userid },
            relations: ['profile'],
        });
        socket.broadcast.emit('new_message', {
            name: user.profile.nickname,
            message: data.message,
        });
    }
    handleCanvasState(state, socket) {
        console.log('received canvas state');
        socket.broadcast.emit('canvas-state-from-server', state);
    }
    handleDrawLine({ prevPoint, currentPoint, color }, socket) {
        socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color });
    }
    handleClear(socket) {
        socket.emit('clear');
        socket.broadcast.emit('clear');
    }
};
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatsAndDrawGateway.prototype, "handleDisconnect", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatsAndDrawGateway.prototype, "handleConnection", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('submit_message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatsAndDrawGateway.prototype, "handleNewUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('canvas-state'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatsAndDrawGateway.prototype, "handleCanvasState", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('draw-line'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatsAndDrawGateway.prototype, "handleDrawLine", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clear'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatsAndDrawGateway.prototype, "handleClear", null);
ChatsAndDrawGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'chattings' }),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatsAndDrawGateway);
exports.ChatsAndDrawGateway = ChatsAndDrawGateway;
//# sourceMappingURL=gateway.js.map