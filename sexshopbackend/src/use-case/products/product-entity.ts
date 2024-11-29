import { 
    Column,
    CreateDateColumn,
    Entity,
    IntegerType,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryColumn, 
    UpdateDateColumn 
} from "typeorm";
import { ProductBrand } from "../product-brands/product-brand-entity";
import { ProductCategory } from "../product-category/product-category-entity";

@Entity("product")
export class Product {
    @PrimaryColumn("uuid")
    id: string;

    @Column({length: 60, type: "text", nullable: false})
    name: string;

    @Column({type: "text", nullable: false})
    description: string;

    @Column({type: "decimal", nullable: false, precision: 10, scale: 2})
    price: number;

    @Column({type: "int"})
    stock: IntegerType;

    @ManyToOne(() => ProductBrand, {eager: true, nullable: false})
    @JoinColumn({name: "brand_id"})
    brand_id: ProductBrand;

    @ManyToMany(() => ProductCategory, { eager: true })
    @JoinColumn({name: "procut_category"})
    type_id: ProductCategory;

    @CreateDateColumn({name: "created-at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated-at"})
    updatedAt: Date;
}