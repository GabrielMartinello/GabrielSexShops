import { 
    Column,
    CreateDateColumn,
    Entity,
    IntegerType,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { ProductBrand } from "../product-brands/product-brand-entity";
import { Category } from "../category/category-entity";


@Entity("product")
export class Product {
    @PrimaryGeneratedColumn('uuid')   
    id: string;

    @Column({type: "text", nullable: false})
    name: string;

    @Column({type: "text", nullable: false})
    description: string;

    @Column({type: "decimal", nullable: false, precision: 10, scale: 2})
    price: number;

    @Column({type: "int"})
    stock: IntegerType;

    @ManyToMany(() => ProductBrand, {eager: true, nullable: false})
    @JoinTable({name: "products_brands"})
    brands: ProductBrand[];

    @ManyToMany(() => Category, { eager: true })
    @JoinTable({
        name: "product_category"
    })
    categories: Category[];

    @Column({ nullable: false })
    photo: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}