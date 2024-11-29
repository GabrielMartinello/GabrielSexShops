import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrandModule } from './use-case/product-brands/product-brand-module';
import { ProductCategoryModule } from './use-case/product-category/product-category-module';
import { ProductModule } from './use-case/products/product-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      migrations: [`${__dirname}/migration/*.{ts,js}`],
      migrationsRun: true,
      migrationsTableName: 'u4-migration',
    }),
    ProductBrandModule,
    ProductCategoryModule,
    ProductModule
  ],
})
export class AppModule {}