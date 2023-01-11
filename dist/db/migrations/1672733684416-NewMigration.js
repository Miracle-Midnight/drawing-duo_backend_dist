"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1672733684416 = void 0;
class NewMigration1672733684416 {
    constructor() {
        this.name = 'NewMigration1672733684416';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_8c7de8ca02cb1751afd5d252c0f"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "imagesId" TO "ready"`);
        await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "room" ADD "gameId" integer`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "UQ_b6670c42fb2ea4ff502015b0efe" UNIQUE ("gameId")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ready"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "ready" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_b6670c42fb2ea4ff502015b0efe" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_b6670c42fb2ea4ff502015b0efe"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ready"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "ready" integer`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "UQ_b6670c42fb2ea4ff502015b0efe"`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "gameId"`);
        await queryRunner.query(`DROP TABLE "game"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "ready" TO "imagesId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_8c7de8ca02cb1751afd5d252c0f" FOREIGN KEY ("imagesId") REFERENCES "image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.NewMigration1672733684416 = NewMigration1672733684416;
//# sourceMappingURL=1672733684416-NewMigration.js.map