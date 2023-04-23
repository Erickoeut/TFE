import { Body, Controller, Get, Param, Post, ParseIntPipe, ValidationPipe, UseGuards } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";
import { Player } from "src/shared/entities/player.entity";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Players')
@Controller("api/players")
export class PlayerController {
    constructor(
        private readonly playerServe: PlayerService
    ) { }
    
    @Get()
    async getAll(): Promise<Player[]> {
        return await this.playerServe.getAll()
    }

    @Get(":id")
    async getOnePlayerById(
        @Param("id", ParseIntPipe) playerId: number
    ): Promise<Player> {
        return await this.playerServe.getOnePlayerById(playerId)
    }

    @UseGuards(AuthGuard)
    @Post()
    async createPlayer(
        @Body() newPlayer: CreatePlayerDto
    ): Promise<Player> {
        return this.playerServe.createPlayer(newPlayer)
    }
}