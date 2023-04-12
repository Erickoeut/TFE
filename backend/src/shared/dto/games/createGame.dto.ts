import { IsInt, IsString } from "class-validator"

export class CreateGameDto{
    @IsInt()
    round:number
    @IsString()
    localisation:string
    @IsString()
    type:string
    @IsString()
    date:string
}