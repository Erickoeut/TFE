import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameDto } from "src/shared/dto/games/game.dto";

@Controller("api/games")
export class GameController {
    constructor(
        private readonly gameServe: GameService
    ) { }

    @Get()
    async getAll(): Promise<GameDto[]> {
        return await this.gameServe.getAll()
    }

    @Get(":id")
    async getOne(@Param("id") id): Promise<GameDto> {
        return await this.gameServe.getOne(id)
    }

    @Get("round/:roundId")
    async getGameOfRound(
        @Param("roundId") roundId
    ): Promise<GameDto[]> {
        return await this.gameServe.getGameOfRound(roundId)
    }
}