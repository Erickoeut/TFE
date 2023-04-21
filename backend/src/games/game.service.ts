import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SeasonService } from "src/seasons/season.service";
import { CreateGameDto } from "src/shared/dto/games/createGame.dto";
import { Game } from "src/shared/entities/game.entity";
import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game) private gameRepo: Repository<Game>,
        private readonly teamService:TeamService,
    ) { }
    
    async getAll(): Promise<Game[]> {
        const allGames: Game[] = await this.gameRepo.find(
            {
                relations:{
                    homeTeam:true,
                    awayTeam:true,
                }
            }
        )
        return allGames
    }

    async getOne(gameId): Promise<Game> {
        let oneGame: Game = await this.gameRepo.findOneOrFail({
            select:{            
            },
            where: {
                id: gameId
            },
            relations: {
                awayTeam: true,
                homeTeam: true,
                players:true
            }
        }).catch(()=>{
            throw new NotFoundException('match non trouvé')
        })
        return oneGame
    }


    async create(newGame:CreateGameDto):Promise<any> {
        const createdGame:Game = await this.gameRepo.create({...newGame,finish:false})
        return this.gameRepo.save(createdGame)
    }
    update() { }
}