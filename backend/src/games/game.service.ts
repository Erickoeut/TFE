import { Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuard } from "src/auth/auth.guard";
import { SeasonService } from "src/seasons/season.service";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { Game } from "src/shared/entities/game.entity";
import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepo: Repository<Game>,
        private readonly teamService: TeamService,
        private readonly seasonService: SeasonService
    ) { }

    async getAll(): Promise<Game[]> {
        const allGames: Game[] = await this.gameRepo.find(
            {
                relations: {
                    homeTeam: true,
                    awayTeam: true,
                }
            }
        )
        return allGames
    }

    async getOne(gameId): Promise<Game> {
        let oneGame: Game = await this.gameRepo.findOneOrFail({
            select: {
            },
            where: {
                id: gameId
            },
            relations: {
                awayTeam: true,
                homeTeam: true,
                players: true
            }
        }).catch(() => {
            throw new NotFoundException('match non trouvé')
        })
        return oneGame
    }


    async create(newGame: CreateGameDto): Promise<any> {
        const season = await this.seasonService.findOneByYear(newGame.seasonYear)
        const homeTeam = await this.teamService.getOne(newGame.homeTeamId)
        const awayTeam = await this.teamService.getOne(newGame.awayTeamId)
        if (homeTeam && awayTeam) {
            if (season) {
                const gameToCreate = {
                    season: season,
                    round: newGame.round,
                    localisation: newGame.localisation,
                    date: new Date(newGame.date),
                    homeTeam: homeTeam,
                    awayTeam: awayTeam,
                }
                const createdGame: Game = await this.gameRepo.create({ ...gameToCreate })
                return this.gameRepo.save(createdGame)
            }
            else{
                const newSeason = await this.seasonService.createOne(newGame.seasonYear)
                const gameToCreate = {
                    season: newSeason,
                    round: newGame.round,
                    localisation: newGame.localisation,
                    date: new Date(newGame.date),
                    homeTeam: homeTeam,
                    awayTeam: awayTeam,
                }
                const createdGame: Game = await this.gameRepo.create({ ...gameToCreate })
                return this.gameRepo.save(createdGame)
            }
        }
    }
    update() { }
}