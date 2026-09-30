// import { Injectable } from '@nestjs/common';
// import { CategoryGetResDto } from './dto/category_get.res.dto.js';

// @Injectable()
// export class CategoryService {
//   private categories: CategoryGetResDto [] = [
//     {
//       id: 1,
//       title: 'Furniture',
//       image: 'furniture.png',
//       slug: 'furniture',
//       parent_id: null,
//     },
//     {
//       id: 2,
//       title: 'Chairs',
//       image: 'chairs.png',
//       slug: 'chairs',
//       parent_id: 1,
//     },
//   ];

//   getCategories(): CategoryGetResDto[] {
//     return this.categories;
//   }

//   getCategoryById(id: number): CategoryGetResDto | undefined {
//     return this.categories.find((c) => c.id === id);
//   }
// }
import { CategoryGetResDto } from './dto/category_get.res.dto.js';
import { CategoryCreateReqDto } from './dto/category-create.req.dto.js';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category.entity.js';
import { Repository } from 'typeorm';
 
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly _repository: Repository<Category>,
  ) {}
 
  async create(dto: CategoryCreateReqDto): Promise<void> {
    const category = await this._repository.create({
      title: dto.title,
      slug: dto.slug,
      image: dto.image,
      is_show: true,
      parent_id: dto.parent_id,
      description: dto.description,
    });
    await this._repository.save(category);
  }
}