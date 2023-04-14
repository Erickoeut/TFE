import { Controller, Get, Post, Param, Body, ParseIntPipe, Put, UseGuards } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "src/shared/entities/game.entity";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { UpdateGameDto } from "src/shared/dto/games/updateGame.dto";
import { AuthModule } from "src/auth/auth.module";

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

    @Get("round/:roundId")
    async getGameOfRound(
        @Param("roundId") roundId
    ): Promise<Game[]> {
        return await this.gameServe.getGameOfRound(roundId)
    }

    @UseGuards(AuthModule)
    @Post()
    async create(
        @Body() newGame: CreateGameDto
    ): Promise<Game> {
        return await this.gameServe.create(newGame)
    }

    @UseGuards(AuthModule)
    @Put("admin/:id")
    async update(
        @Body() updateGame: UpdateGameDto
    ): Promise<Game> {
        return
    }
}