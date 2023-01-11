"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextMigration1672765190440 = void 0;
class NextMigration1672765190440 {
    constructor() {
        this.name = 'NextMigration1672765190440';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "socketid" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "socketid"`);
    }
}
exports.NextMigration1672765190440 = NextMigration1672765190440;
//# sourceMappingURL=1672765190440-NextMigration.js.map