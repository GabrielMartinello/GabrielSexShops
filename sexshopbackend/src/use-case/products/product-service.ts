import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"
import { Product } from "./product-entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private repository: Repository<Product>
    ) {}

    findAll(): Promise<Product[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<Product> {
        return this.repository.findOneBy({ id: id});
    }

    save(brand: Product): Promise<Product> {
        return this.repository.save(brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}