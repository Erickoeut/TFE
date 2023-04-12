import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
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

    async getOne(gameId): Promise<Game|undefined> {
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

    async create(newGame:CreateGameDto):Promise<Game> {
        const createdGame:Game = await this.gameRepo.create({...newGame,finish:false})
        return createdGame
    }
    update() { }
}