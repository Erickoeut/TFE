import { Controller, Get, Param } from "@nestjs/common";
import { TeamService } from "./team.service";
import { ApiTags } from "@nestjs/swagger";
import { Team } from "src/shared/entities/team.entity";
@ApiTags('Teams')
@Controller("api/teams")
export class TeamController {
    constructor(
        private readonly teamServe: TeamService
    ) { }

    @Get()
    async getAll() :Promise<Team[]>{
        return await this.teamServe.getAll()
    }

    @Get(":teamId")
    async getOne(
        @Param("teamId") teamId:number
    ):Promise<Team> {
        return await this.teamServe.getOne(teamId)
    }
}