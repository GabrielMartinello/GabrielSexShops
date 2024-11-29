import { Injectable } from "@nestjs/common";
import { ProductBrand } from "./product-brand-entity";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"

@Injectable()
export class ProductBrandService {
    constructor(
        @InjectRepository(ProductBrand)
        private repository: Repository<ProductBrand>
    ) {}

    findAll(): Promise<ProductBrand[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<ProductBrand> {
        return this.repository.findOneBy({ id: id});
    }

    save(brand: ProductBrand): Promise<ProductBrand> {
        return this.repository.save(brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}