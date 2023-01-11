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
exports.MyGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let MyGateway = class MyGateway {
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(`Connected: ${socket.connected}`);
        });
    }
    onNewMessage(body) {
        console.log(body);
        this.server.emit('onMessage', body);
    }
    onClientReady() {
        this.server.emit('get-canvas-state');
    }
    onCanvasState(state) {
        console.log('received canvas state');
        this.server.emit('canvas-state-from-server', state);
    }
    onDrawLine({ prevPoint, currentPoint, color }) {
        this.server.emit('draw-line', { prevPoint, currentPoint, color });
    }
    onClear() {
        this.server.emit('clear');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MyGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MyGateway.prototype, "onNewMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('client-ready'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyGateway.prototype, "onClientReady", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('canvas-state'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyGateway.prototype, "onCanvasState", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('draw-line'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyGateway.prototype, "onDrawLine", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clear'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyGateway.prototype, "onClear", null);
MyGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3001)
], MyGateway);
exports.MyGateway = MyGateway;
//# sourceMappingURL=draw.gateway.js.map