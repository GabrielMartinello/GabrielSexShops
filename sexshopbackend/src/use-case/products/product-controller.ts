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
import { ProductService } from './product-service';
import { Product } from './product-entity';

  @Controller('categories')
  export class ProductController {
    constructor(private service: ProductService) {}
  
    @Get()
    findAll(): Promise<Product[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: string): Promise<Product> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() Product: Product): Promise<Product> {
      return this.service.save(Product);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() Product: Product,
    ): Promise<Product> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
      }
  
      Product.id = found.id;
  
      return this.service.save(Product);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
    
      return this.service.remove(id);
    }
  }