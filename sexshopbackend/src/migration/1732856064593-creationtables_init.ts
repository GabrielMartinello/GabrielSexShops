import { MigrationInterface, QueryRunner } from "typeorm";

export class CreationtablesInit1732856064593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE "public"."product_brand" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(100) NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE "public"."product_type" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(100) NOT NULL,
                "description" TEXT,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE "public"."product" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(150) NOT NULL,
                "description" TEXT,
                "price" NUMERIC(10,2) NOT NULL,
                "stock" INT NOT NULL,
                "brand_id" INT NOT NULL REFERENCES "public"."product_brand"("id"),
                "type_id" INT NOT NULL REFERENCES "public"."product_type"("id"),
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE "public"."product_brand"
            DROP TABLE "public"."product_type";
            DROP TABLE "public"."product";
                
        `)
    }

}
