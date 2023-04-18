import { Controller, Get } from "@nestjs/common";
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

    @Get('/ranking')
    async getRanking(){
        return await this.seasonService.getRanking()
    }
}