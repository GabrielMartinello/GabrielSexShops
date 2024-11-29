import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity("productbrand")
export class ProductBrand {
    @PrimaryColumn("uuid")
    id: string;

    @Column({length: 60, type: "text",  nullable: false})
    name: string;

    @CreateDateColumn({name: "created-at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated-at"})
    updatedAt: Date;
}