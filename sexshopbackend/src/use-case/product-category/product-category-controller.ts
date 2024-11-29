import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { ProductCategory } from './product-category-entity';
import { ProductCategoryService } from './product-category-service';


  
  @Controller('categories')
  export class ProductCategoryController {
    constructor(private service: ProductCategoryService) {}
  
    @Get()
    findAll(): Promise<ProductCategory[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: string): Promise<ProductCategory> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('ProductCategory not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() ProductCategory: ProductCategory): Promise<ProductCategory> {
      return this.service.save(ProductCategory);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() ProductCategory: ProductCategory,
    ): Promise<ProductCategory> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
      }
  
      ProductCategory.id = found.id;
  
      return this.service.save(ProductCategory);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('ProductCategory not found', HttpStatus.NOT_FOUND);
      }
    
      return this.service.remove(id);
    }
  }