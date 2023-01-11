"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdMigration1672769729511 = void 0;
class ThirdMigration1672769729511 {
    constructor() {
        this.name = 'ThirdMigration1672769729511';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socketid" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socketid" SET NOT NULL`);
    }
}
exports.ThirdMigration1672769729511 = ThirdMigration1672769729511;
//# sourceMappingURL=1672769729511-ThirdMigration.js.map