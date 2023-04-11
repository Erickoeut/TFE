import { Body, Controller, Get, Param, Post, ParseIntPipe,ValidationPipe } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";
import { Player } from "src/shared/entities/player.entity";

@Controller("api/players")
export class PlayerController {
    constructor(
        private readonly playerServe: PlayerService
    ) { }
    @Get()
    async getAll(): Promise<Player[]> {
        return await this.playerServe.getAll()
    }

    @Get(":playerId")
    async getOnePlayerById(
        @Param("playerId",ParseIntPipe) playerId:number
    ): Promise<Player> {
        return await this.playerServe.getOnePlayerById(playerId)
    }
    
    @Post()
    async createPlayer(
        @Body() newPlayer:CreatePlayerDto
    ):Promise<Player>{
        return this.playerServe.createPlayer(newPlayer)
    }
}