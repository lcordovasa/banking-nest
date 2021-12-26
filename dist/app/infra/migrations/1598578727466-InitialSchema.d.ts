import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class InitialSchema1598578727466 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
