import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo:Repository<User>
    ){}
    async findOne(username:string):Promise<User>{
        return this.userRepo.findOneBy({username:username})
    }
}
