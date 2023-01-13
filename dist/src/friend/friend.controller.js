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
exports.FriendController = void 0;
const common_1 = require("@nestjs/common");
const friend_service_1 = require("./friend.service");
const common_2 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
let FriendController = class FriendController {
    constructor(friendService) {
        this.friendService = friendService;
    }
    getFriend(req, userDto) {
        return this.friendService.getFriendList(userDto);
    }
    serchUser(req, friendname) {
        return this.friendService.serchUser(friendname);
    }
    addFriend(userDto) {
        return this.friendService.addFriend(userDto);
    }
};
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, decorators_1.Req)()),
    __param(1, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FriendController.prototype, "getFriend", null);
__decorate([
    (0, common_2.Get)('serch/:id'),
    __param(0, (0, decorators_1.Req)()),
    __param(1, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FriendController.prototype, "serchUser", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FriendController.prototype, "addFriend", null);
FriendController = __decorate([
    (0, common_1.Controller)('friend'),
    __metadata("design:paramtypes", [friend_service_1.FriendService])
], FriendController);
exports.FriendController = FriendController;
//# sourceMappingURL=friend.controller.js.map