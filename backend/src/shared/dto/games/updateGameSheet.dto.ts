import { IsArray, IsBoolean, IsInt, IsString } from "class-validator"

export class UpdateGameSheetDto{
    @IsInt()
    teamId:number
    @IsArray()
    players:number[]
   
    
}