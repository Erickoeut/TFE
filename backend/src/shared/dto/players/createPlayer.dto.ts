import { IsInt, IsString } from "class-validator"

export class CreatePlayerDto{
    @IsString()
    firstName:string
    @IsString()
    lastName:string
    @IsInt()
    age:number   
    @IsString()
    gender:string
    @IsString()
    position:string
    @IsInt()
    teamId:number
}