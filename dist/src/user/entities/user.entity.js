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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const room_entity_1 = require("../../room/entities/room.entity");
let User = User_1 = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "socketid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "ready", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, (profile) => profile.user, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", profile_entity_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, (room) => room.users, { onDelete: 'SET NULL' }),
    __metadata("design:type", room_entity_1.Room)
], User.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => User_1, (user) => user.childUser),
    __metadata("design:type", User)
], User.prototype, "parentUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => User_1, (user) => user.parentUser),
    __metadata("design:type", Array)
], User.prototype, "childUser", void 0);
User = User_1 = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map