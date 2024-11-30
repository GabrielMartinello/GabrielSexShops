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
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
import { ProductService } from './product-service';
import { Product } from './product-entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { SupabaseService } from 'src/@libs/supabase/supabase.service';

  @Controller('products')
  export class ProductController {
    constructor(
      private readonly service: ProductService,
      private readonly supabaseService: SupabaseService,
    ) {}
  
    @Get()
    findAll(): Promise<Product[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() product: Product): Promise<Product> {
      console.log(JSON.stringify(product))
      return this.service.save(product);
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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      if (!file) {
        throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
      }

      const result = await this.supabaseService.upload(file);

      if (!result) {
        throw new HttpException(
          'Unable to upload file',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return result;
    }
  }