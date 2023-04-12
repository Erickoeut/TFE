import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }
    async findOne(username: string): Promise<User|undefined> {
        const user: User = await this.userRepo.findOneBy({ username: username })
        if(user){
            return user
        }
        else{
            throw new NotFoundException("Cet utilisateur n'existe")
        }
    }
}