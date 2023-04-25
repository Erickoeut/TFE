import { IsBoolean, IsInt, IsString } from "class-validator"

export class UpdateScoreDto{
    @IsInt()
    homeScore:number
    @IsInt()
    awayScore:number
    @IsBoolean()
    finish:boolean
    
}