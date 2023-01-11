"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SixthMigration1672838121569 = void 0;
class SixthMigration1672838121569 {
    constructor() {
        this.name = 'SixthMigration1672838121569';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SixthMigration1672838121569 = SixthMigration1672838121569;
//# sourceMappingURL=1672838121569-SixthMigration.js.map