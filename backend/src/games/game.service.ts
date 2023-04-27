import { Injectable, NotFoundException, UseGuards,BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuard } from "src/auth/auth.guard";
import { PlayerService } from "src/players/player.service";
import { SeasonService } from "src/seasons/season.service";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { Game } from "src/shared/entities/game.entity";
import { Season } from "src/shared/entities/season.entity";
import { Team } from "src/shared/entities/team.entity";
import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepo: Repository<Game>,
        private readonly teamService: TeamService,
        private readonly seasonService: SeasonService,
        private readonly playerService:PlayerService
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
                homeTeam: true,
                awayTeam: true,
                homePlayers: true,
                awayPlayers:true
            }
        }).catch(() => {
            throw new NotFoundException('match non trouvé')
        })
        return oneGame
    }

    async create(newGame: CreateGameDto): Promise<any> {
        const season:Season = await this.seasonService.findOneByYear(newGame.seasonYear)
        const homeTeam:Team = await this.teamService.getOne(newGame.homeTeamId)
        const awayTeam:Team = await this.teamService.getOne(newGame.awayTeamId)
        if (homeTeam && awayTeam) {
            if (season) {
                const gameToCreate = {
                    season: season,
                    round: newGame.round,
                    location: newGame.location,
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
                    location: newGame.location,
                    date: new Date(newGame.date),
                    homeTeam: homeTeam,
                    awayTeam: awayTeam,
                }
                const createdGame: Game = await this.gameRepo.create({ ...gameToCreate })
                return this.gameRepo.save(createdGame)
            }
        }
    }

    async updateScore(id,homeScore,awayScore,finish) { 
        const updateGame = await this.getOne(id)
        updateGame.homeScore=homeScore
        updateGame.awayScore=awayScore
        updateGame.finish=finish
        return this.gameRepo.save(updateGame)
    }


    async updateTeam(gameId:number,teamId:number,playersId:number[]){
        const game= await this.getOne(gameId)
        if(teamId==game.homeTeam.id){
            game.homePlayers=[]
            for(let playerId of playersId){
                game.homePlayers.push(await this.playerService.getOnePlayerById(playerId))
            }
            return this.gameRepo.save(game)
        }
        else if(teamId===game.awayTeam.id){
            game.awayPlayers=[]
            for(let playerId of playersId){
                game.awayPlayers.push(await this.playerService.getOnePlayerById(playerId))
            }
            return this.gameRepo.save(game)
        }
        else{
            throw new BadRequestException("cette equipe ne joue pas ce match")
        }
    }

}