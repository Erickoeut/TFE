import { Body, Controller, Get, Param, Post, Put, Req, Request, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/shared/dto/users/createUser.dto";
import { UsersService } from "./users.service";
import { UpdateUserRoleDto } from "src/shared/dto/users/updateUserRole.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/shared/entities/users.entity";

@ApiTags('Auth-user')
@Controller("api/users")
export class UsersController{
    constructor(private readonly userService:UsersService){}
    
    @UseGuards(AuthGuard)
    @Post()
    async createUser(
        @Body() newUser:CreateUserDto
    ):Promise<User>{
        return await this.userService.createOne(newUser)
    }

    @UseGuards(AuthGuard)
    @Put()
    async updateUserRole(
        @Body() userToUpdate:UpdateUserRoleDto
    ):Promise<User>{
        return await this.userService.updateUserRole(userToUpdate)
    }

    @UseGuards(AuthGuard)
    @Get()
    async getOne(
        @Request() request 
    ):Promise<any>{
        const User= await this.userService.getOne(request.user.username) 
        return User
    }
}