import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { SeasonService } from "./season.service";
import { ApiTags } from "@nestjs/swagger";
import { Season } from "src/shared/entities/season.entity";
@ApiTags('Season')
@Controller('api/seasons')
export class SeasonController {
    constructor(private readonly seasonService: SeasonService) { }

    @Get()
    async getAll():Promise<Season[]> {
        return await this.seasonService.getAll()
    }

    @Get(":seasonId")
    async getOne(
        @Param("seasonId",ParseIntPipe) seasonId:number
    ) :Promise<Season>{
        return await this.seasonService.getOne(seasonId)
    }

    @Get(':seasonId/ranking')
    async getRanking(
        @Param('seasonId', ParseIntPipe) seasonId: number
    ):Promise<any> {
        return await this.seasonService.getRanking(seasonId)
    }
}