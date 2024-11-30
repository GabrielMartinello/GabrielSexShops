import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product-controller';
import { ProductService } from './product-service';
import { Product } from './product-entity';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';
import { ProductBrand } from '../product-brands/product-brand-entity';
import { Category } from '../category/category-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, ProductBrand]), SupabaseModule],
  providers: [ProductService],
  controllers: [ProductController],
})

export class ProductModule {}