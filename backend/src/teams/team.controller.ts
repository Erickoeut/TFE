import { Controller, Get, Param } from "@nestjs/common";
import { TeamService } from "./team.service";

@Controller("api/teams")
export class TeamController {
    constructor(
        private readonly teamServe: TeamService
    ) { }
    @Get()
    async getAll() {
        return await this.teamServe.getAll()
    }

    @Get(":teamId")
    async getOne(
        @Param("teamId") teamId:number
    ) {
        return await this.teamServe.getOne(teamId)
    }
}