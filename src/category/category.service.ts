import { Injectable } from '@nestjs/common';
import { CategoryGetResDto } from './dto/category_get.res.dto.js';

@Injectable()
export class CategoryService {
  private categories: CategoryGetResDto [] = [
    {
      id: 1,
      title: 'Furniture',
      image: 'furniture.png',
      slug: 'furniture',
      parent_id: null,
    },
    {
      id: 2,
      title: 'Chairs',
      image: 'chairs.png',
      slug: 'chairs',
      parent_id: 1,
    },
  ];

  getCategories(): CategoryGetResDto[] {
    return this.categories;
  }

  getCategoryById(id: number): CategoryGetResDto | undefined {
    return this.categories.find((c) => c.id === id);
  }
}