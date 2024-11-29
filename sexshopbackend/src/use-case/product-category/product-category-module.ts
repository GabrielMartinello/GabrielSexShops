import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './product-category-entity';
import { ProductCategoryService } from './product-category-service';
import { ProductCategoryController } from './product-category-controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController],
})

export class ProductCategoryModule {}