"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeventhMigration1672839258951 = void 0;
class SeventhMigration1672839258951 {
    constructor() {
        this.name = 'SeventhMigration1672839258951';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.SeventhMigration1672839258951 = SeventhMigration1672839258951;
//# sourceMappingURL=1672839258951-SeventhMigration.js.map