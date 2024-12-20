import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity("brand")
export class ProductBrand {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "text",  nullable: false})
    name: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}