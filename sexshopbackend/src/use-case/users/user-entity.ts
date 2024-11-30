import { 
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length: 50, nullable: false, unique: true})
    username: string;

    @Column({type: "varchar", length: 150, nullable: false, unique: true})
    email: string;

    @Column({type: "varchar", nullable: false})
    password: string;

    @Column({type: "boolean", default: true})
    isActive: boolean;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}
