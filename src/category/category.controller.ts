import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Body,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service.js';
import { CategoryCreateReqDto } from './dto/category-create.req.dto.js';
import { CategoryGetResDto } from './dto/category_get.res.dto.js';
 
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
 
  // @Get()
  // getAllCategories(): CategoryGetResDto[] {
  //   return this.categoryService.getCategories();
  // }
 
  // @Get(':id')
  // getCategoryById(@Param('id') id: string): CategoryGetResDto {
  //   const category: CategoryGetResDto | undefined =
  //     this.categoryService.getCategoryById(+id);
  //   if (category === undefined) {
  //     throw new NotFoundException('Category not found');
  //   }
  //   return category;
  // }
 
  @Post()
  createCategory(@Body() category: CategoryCreateReqDto): CategoryGetResDto {
    this.categoryService.create(category);
    return { ...category, id: 1 };
  }
}