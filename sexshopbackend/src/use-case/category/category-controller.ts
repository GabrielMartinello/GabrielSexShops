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
import { CategoryService } from './category-service';
import { Category } from './category-entity';

  
  @Controller('categories')
  export class CategoryController {
    constructor(private service: CategoryService) {}
  
    @Get()
    findAll(): Promise<Category[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() Category: Category): Promise<Category> {
      return this.service.save(Category);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() Category: Category,
    ): Promise<Category> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
      }
  
      Category.id = found.id;
  
      return this.service.save(Category);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }
    
      return this.service.remove(id);
    }
  }