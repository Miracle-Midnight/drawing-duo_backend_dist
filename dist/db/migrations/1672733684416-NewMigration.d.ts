import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1672733684416 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
