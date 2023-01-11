import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ThirdMigration1672769729511 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
