import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrandModule } from './use-case/product-brands/product-brand-module';
import { ProductModule } from './use-case/products/product-module';
import { CategoryModule } from './use-case/category/category-module';

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
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductBrandModule,
    CategoryModule,
    ProductModule
  ],
})
export class AppModule {}