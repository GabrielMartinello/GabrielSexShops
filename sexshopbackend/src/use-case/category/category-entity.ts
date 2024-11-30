import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "text", nullable: false})
    name: string;

    @Column({type: "text", nullable: false})
    description: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}