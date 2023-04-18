import { IsInt, IsString } from "class-validator"

export class CreateGameDto{
    @IsInt()
    seasonYear:number
    @IsInt()
    round:number
    @IsString()
    localisation:string
    @IsString()
    type:string
    @IsString()
    date:string
    @IsInt()
    homeTeamId:number
    @IsInt()
    awayTeamId:number
}