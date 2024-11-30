import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"
import { Category } from "./category-entity";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>
    ) {}

    findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<Category> {
        return this.repository.findOneBy({ id: id});
    }

    save(brand: Category): Promise<Category> {
        return this.repository.save(brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}