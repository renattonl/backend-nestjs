import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private rows: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const row: Product = { ...createProductDto, id: Date.now() };
    this.rows.push(row);
    return row;
  }

  findAll(): Product[] {
    return this.rows;
  }

  findOne(id: number): Product {
    const row: Product = this.rows.find((item) => item.id === id);
    if (!row) {
      throw new NotFoundException(`Not found record with id: ${id}`);
    }
    return row;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const index: number = this.rows.findIndex((item) => item.id === id);
    if (index < 0) {
      throw new NotFoundException(`Not found record with id: ${id}`);
    }
    this.rows[index] = { ...this.rows[index], ...updateProductDto };
    return this.rows[index];
  }

  remove(id: number): void {
    const index: number = this.rows.findIndex((item) => item.id === id);
    if (index < 0) {
      throw new NotFoundException(`Not found record with id: ${id}`);
    }
    this.rows.splice(index, 1);
  }
}
