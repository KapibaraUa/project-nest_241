import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1790764673381 implements MigrationInterface {
    name = 'CreateUser1790764673381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(30) NOT NULL, "password_hash" character varying(64) NOT NULL, "fullname" character varying(50), "is_block" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
