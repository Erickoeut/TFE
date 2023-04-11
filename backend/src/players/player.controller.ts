import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { PlayerDto } from "src/shared/dto/players/player.dto";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";

@Controller("api/players")
export class PlayerController {
    constructor(
        private readonly playerServe: PlayerService
    ) { }
    @Get()
    async getAll(): Promise<PlayerDto[]> {
        return await this.playerServe.getAll()
    }

    @Get(":playerId")
    async getOnePlayerById(
        @Param("playerId") playerId:number
    ): Promise<PlayerDto> {
        return await this.playerServe.getOnePlayerById(playerId)
    }
    
    @Post()
    async createPlayer(
        @Body(ValidationPipe) newPlayer:CreatePlayerDto
    ):Promise<PlayerDto>{
        return
    }
}