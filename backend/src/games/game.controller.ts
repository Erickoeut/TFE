import { Controller, Get, Post, Param, Body, ParseIntPipe, Put, UseGuards } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "src/shared/entities/game.entity";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { UpdateGameDto } from "src/shared/dto/games/updateGame.dto";
import { AuthModule } from "src/auth/auth.module";
import { Season } from "src/shared/entities/season.entity";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Games')
@Controller("api/games")
export class GameController {
    constructor(
        private readonly gameServe: GameService
    ) { }

    @Get()
    async getAll(): Promise<Game[]> {
        return await this.gameServe.getAll()
    }

    @Get(":id")
    async getOne(@Param("id", ParseIntPipe) id): Promise<Game> {
        return await this.gameServe.getOne(id)
    }

    @Get("/season/:id")
    async getAllGameOfSeason(){

    }

    @Get("/season/:seasonId/round/:roundId")
    async getGameOfRound(
        @Param("roundId", ParseIntPipe) roundId: number,
        @Param("seasonId", ParseIntPipe) seasonId: number
    ): Promise<Game[]> {
        return await this.gameServe.getGameOfRound(seasonId, roundId)
    }

    @Get("season/:seasonId/team/:teamId")
    async getGameOfTeam(
        @Param("teamId", ParseIntPipe) teamId: number,
        @Param('seasonId', ParseIntPipe) seasonId
    ): Promise<object> {
        return await this.gameServe.getGameOfTeam(seasonId, teamId)
    }


    @UseGuards(AuthModule)
    @Post()
    async create(
        @Body() newGame: CreateGameDto
    ): Promise<Game> {
        return await this.gameServe.create(newGame)
    }

    @UseGuards(AuthModule)
    @Put(":id")
    async update(
        @Body() updateGame: UpdateGameDto
    ): Promise<Game> {
        return
    }
}