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

    async getAllGameOfSeason(seasonId){
        const gameOfSeason: Game[] = await this.gameRepo.find({
            where: {
                season:seasonId
            },
            relations: {
                season:true,
                awayTeam: true,
                homeTeam: true
            }
        })
        return gameOfSeason 
    }

    async getGameOfRound(seasonId,roundId): Promise<Game[]> {
        const gameOfRound: Game[] = await this.gameRepo.find({
            where: {
                round: roundId,
                season:seasonId
            },
            relations: {
                awayTeam: true,
                homeTeam: true
            }
        })
        return gameOfRound
    }

    async getGameOfTeam(seasonId:number,teamId):Promise<any>{
        const team = await this.teamService.getOne(teamId)
        const homeGameOfTeam = await this.gameRepo.find({
            where:{
                homeTeam:team,
                // seasonId:seasonId
            },
            relations:{
                homeTeam:true,
                awayTeam:true
            }
        })
        const awayGamesOfTeam = await this.gameRepo.find({
            where:{
                awayTeam:team,
                // seasonId:seasonId
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