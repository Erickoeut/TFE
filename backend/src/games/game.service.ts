import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Game } from "src/shared/entities/game.entity";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepo: Repository<Game>
    ) { }
    async getAll(): Promise<Game[]> {
        const allGames: Game[] = await this.gameRepo.find({})
        return allGames
    }

    async getOne(gameId): Promise<Game> {
        let oneGame: Game = await this.gameRepo.findOne({
            where: {
                id: gameId
            },
            relations: {
                awayTeam: true,
                homeTeam: true
            }
        })
        return oneGame
    }

    async getGameOfRound(roundId): Promise<Game[]> {
        const gameOfRound: Game[] = await this.gameRepo.find({
            where: {
                round: roundId
            },
            relations: {
                awayTeam: true,
                homeTeam: true
            }
        })
        return gameOfRound
    }

    create() { }
    update() { }
}