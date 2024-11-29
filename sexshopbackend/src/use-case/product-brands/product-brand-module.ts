import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrand } from './product-brand-entity';
import { ProductBrandService } from './product-brand-service';
import { ProductBrandController } from './product-brand-controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductBrand])],
  providers: [ProductBrandService],
  controllers: [ProductBrandController],
})

export class ProductBrandModule {}