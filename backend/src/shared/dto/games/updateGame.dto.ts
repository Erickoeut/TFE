import { IsBoolean, IsInt, IsString } from "class-validator"

export class UpdateGameDto{
    @IsInt()
    homeScore:number
    @IsInt()
    awayScore:number
    @IsBoolean()
    finish:boolean
    
}