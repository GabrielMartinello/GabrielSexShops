import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"
import { User } from "./user-entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<User> {
        return this.repository.findOneBy({ id: id});
    }

    save(brand: User): Promise<User> {
        return this.repository.save(brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}