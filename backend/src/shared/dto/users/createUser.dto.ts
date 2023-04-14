import { IsEmail, IsInt, IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    username:string
    @IsString()
    password:string
    @IsEmail()
    email:string
    @IsInt()
    teamId:number
}