"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const user_module_1 = require("./user/user.module");
const room_module_1 = require("./room/room.module");
const lobby_module_1 = require("./lobby/lobby.module");
const game_module_1 = require("./game/game.module");
const result_controller_1 = require("./result/result.controller");
const result_service_1 = require("./result/result.service");
const result_module_1 = require("./result/result.module");
const typeorm_1 = require("@nestjs/typeorm");
const gateway_module_1 = require("./gateway/gateway.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const aws_service_1 = require("./aws.service");
const friend_module_1 = require("./friend/friend.module");
const gamelobby_module_1 = require("./gamelobby/gamelobby.module");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const data_source_1 = require("../db/data-source");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            room_module_1.RoomModule,
            lobby_module_1.LobbyModule,
            game_module_1.GameModule,
            result_module_1.ResultModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            gateway_module_1.ChatsAndDrawModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
                exclude: ['/api*'],
            }),
            auth_module_1.AuthModule,
            friend_module_1.FriendModule,
            gamelobby_module_1.GamelobbyModule,
        ],
        controllers: [app_controller_1.AppController, result_controller_1.ResultController],
        providers: [result_service_1.ResultService, aws_service_1.AwsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map