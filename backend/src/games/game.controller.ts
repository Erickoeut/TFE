import { Controller, Get, Post, Param, Body, ParseIntPipe, Put, UseGuards, Delete } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "src/shared/entities/game.entity";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { UpdateScoreDto } from "src/shared/dto/games/updateScore.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { UpdateGameSheetDto } from "src/shared/dto/games/updateGameSheet.dto";

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

    @Post()
    @UseGuards(AuthGuard)
    async create(
        @Body() newGame: CreateGameDto
    ): Promise<Game> {
        return await this.gameServe.create(newGame)
    }

    @Put(":id/score")
    // @UseGuards(AuthGuard)
    async updateScore(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateGame: UpdateScoreDto
    ): Promise<Game> {
        return await this.gameServe.updateScore(id, updateGame.homeScore, updateGame.awayScore, updateGame.finish)
    }
    
    @Put(":id/teams")
    // @UseGuards(AuthGuard)
    async updateGameSheet(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateGame: UpdateGameSheetDto
    ): Promise<Game> {
        return await this.gameServe.updateTeam(id, updateGame.teamId, updateGame.playersIds)
    }
    
}