import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/shared/dto/users/createUser.dto';
import { UpdateUserRoleDto } from 'src/shared/dto/users/updateUserRole.dto';
import { User } from 'src/shared/entities/users.entity';
import { TeamService } from 'src/teams/team.service';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private readonly teamService:TeamService
    ) { }
    
    async findOne(username: string): Promise<User|undefined> {
        const user: User|undefined = await this.userRepo.findOneBy({ username: username })
        if(user){
            return user
        }
        else{
            throw new NotFoundException("Cet utilisateur n'existe pas")
        }
    }
    
    async createOne(newUser:CreateUserDto):Promise<User>{
        
        const usernameExist = await this.userRepo.findOne({where:{username:newUser.username}})
        const emailExist = await this.userRepo.findOne({where:{email:newUser.email}})

        if(usernameExist){
            throw new BadRequestException("Ce pseudo est déja utilisé")
        }
        else if(emailExist){
            throw new BadRequestException("il y a déja un ulilisateur avec cet email")
        }
        else{
            const team = await this.teamService.getOne(newUser.teamId)
            if(team){
                const createdUser = await this.userRepo.create(
                    {
                        ...newUser,
                        role:"user"
                    }
                )
                return this.userRepo.save(createdUser)
            }
            else{throw new BadRequestException("L'utilisateur ne peut être lié a une équipe inexistant")}
        }
    }

    async updateUserRole(userToUpdate:UpdateUserRoleDto):Promise<User>{
        const userExist:User|undefined = await this.userRepo.findOne({where:{username:userToUpdate.username}})
        if(userExist){
            userExist.role=userToUpdate.newRole
            return
        }
        else{
            throw new BadRequestException("cet utilisateur n'existe pas")
        }
    }

}