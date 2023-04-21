import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { SeasonService } from "./season.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Season')
@Controller('api/seasons')
export class SeasonController {
    constructor(private readonly seasonService: SeasonService) { }

    @Get()
    async getAll() {
        return await this.seasonService.getAll()
    }
    @Get(":seasonId")
    async getOne(
        @Param("seasonId") seasonId
    ) {
        return await this.seasonService.getOne(seasonId)
    }

    @Get(':seasonId/ranking')
    async getRanking(
        @Param('seasonId', ParseIntPipe) seasonId: number
    ) {
        return await this.seasonService.getRanking(seasonId)
    }
}