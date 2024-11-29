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
import { ProductBrandService } from './product-brand-service';
import { ProductBrand } from './product-brand-entity';

  
  @Controller('categories')
  export class ProductBrandController {
    constructor(private service: ProductBrandService) {}
  
    @Get()
    findAll(): Promise<ProductBrand[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: string): Promise<ProductBrand> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('ProductBrand not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() ProductBrand: ProductBrand): Promise<ProductBrand> {
      return this.service.save(ProductBrand);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() ProductBrand: ProductBrand,
    ): Promise<ProductBrand> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
      }
  
      ProductBrand.id = found.id;
  
      return this.service.save(ProductBrand);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('ProductBrand not found', HttpStatus.NOT_FOUND);
      }
    
      return this.service.remove(id);
    }
  }