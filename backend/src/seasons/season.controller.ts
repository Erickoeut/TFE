import { Controller, Get } from "@nestjs/common";
import { SeasonService } from "./season.service";

@Controller()
export class SeasonController{
    constructor(private readonly seasonService:SeasonService){}

    @Get()
    async getAll(){
        return await this.seasonService.getAll()
    }
}