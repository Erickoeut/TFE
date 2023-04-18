import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { SeasonService } from "./season.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Season')
@Controller('api/season')
export class SeasonController{
    constructor(private readonly seasonService:SeasonService){}

    @Get()
    async getAll(){
        return await this.seasonService.getAll()
    }

    @Get(':seasonId/ranking')
    async getRanking(
        @Param('seasonId',ParseIntPipe) seasonId:number
    ){
        return await this.seasonService.getRanking(seasonId)
    }
}