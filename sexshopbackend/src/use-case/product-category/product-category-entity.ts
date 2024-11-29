import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity("productcategory")
export class ProductCategory {
    @PrimaryColumn("uuid")
    id: string;

    @Column({length: 60, type: "text", nullable: false})
    name: string;

    @Column({length: 120, type: "text", nullable: false})
    description: string;

    @CreateDateColumn({name: "created-at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated-at"})
    updatedAt: Date;
}