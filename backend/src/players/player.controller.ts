import { Controller, Get, Param } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { PlayerDto } from "src/shared/dto/players/player.dto";

@Controller("api/players")
export class PlayerController{
    constructor(
        private readonly playerServe:PlayerService
    ){}
    @Get()
    async getAll():Promise<PlayerDto[]>{
        return await this.playerServe.getAll()
    }

    @Get(":playerId")
    async getOnePlayerById(
        @Param("playerId") playerId
    ):Promise<PlayerDto>{
        return await this.playerServe.getOnePlayerById(playerId)
    }

    @Get("team/:teamId")
    async getPlayersOfOneTeam(
        @Param("teamId") teamId
    ):Promise<PlayerDto[]>
    {
        return await this.playerServe.getPlayersOfOneTeam(teamId)
    }
}