import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "src/shared/dto/users/createUser.dto";
import { UsersService } from "./users.service";
import { UpdateUserRoleDto } from "src/shared/dto/users/updateUserRole.dto";

@Controller("api/users")
export class UsersController{
    constructor(private readonly userService:UsersService){}

    @Post()
    async createUser(
        @Body() newUser:CreateUserDto
    ){
        return await this.userService.createOne(newUser)
    }
    
    @Put()
    async updateUserRole(
        @Body() userToUpdate:UpdateUserRoleDto
    ){
        return await this.userService.updateUserRole(userToUpdate)
    }
}