"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/src/*/entities/*.entity.{js,ts}'],
    migrations: ['dist/db/migrations/*.{js.ts}'],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=typeorm.config.js.map