import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"
import { ProductCategory } from "./product-category-entity";

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategory)
        private repository: Repository<ProductCategory>
    ) {}

    findAll(): Promise<ProductCategory[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<ProductCategory> {
        return this.repository.findOneBy({ id: id});
    }

    save(brand: ProductCategory): Promise<ProductCategory> {
        return this.repository.save(brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}