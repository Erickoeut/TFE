import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { Game } from "src/shared/entities/game.entity";
import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepo: Repository<Game>,
        private readonly teamService:TeamService
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
        if(oneGame){
            return oneGame
        }
        else{
            throw new NotFoundException('match non trouvé')
        }
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

    async getGameOfTeam(teamId):Promise<any>{
        const team = await this.teamService.getOne(teamId)
        const homeGameOfTeam = await this.gameRepo.find({
            where:{
                homeTeam:team
            },
            relations:{
                homeTeam:true,
                awayTeam:true
            }
        })
        const awayGamesOfTeam = await this.gameRepo.find({
            where:{
                awayTeam:team
            },
            relations:{
                homeTeam:true,
                awayTeam:true
            }
        })
        
        return ({homeGames:homeGameOfTeam,awayGames:awayGamesOfTeam})
    }

    async create(newGame:CreateGameDto):Promise<any> {
        const createdGame:Game = await this.gameRepo.create({...newGame,finish:false})
        return this.gameRepo.save(createdGame)
    }
    update() { }
}