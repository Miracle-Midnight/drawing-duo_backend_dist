import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NextMigration1672765190440 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
