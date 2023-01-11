"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const room_entity_1 = require("../entities/room.entity");
class CreateRoomDto extends (0, swagger_1.PickType)(room_entity_1.Room, ['title']) {
}
exports.CreateRoomDto = CreateRoomDto;
//# sourceMappingURL=create-room.dto.js.map