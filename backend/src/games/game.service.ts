import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameDto } from "src/shared/dto/games/game.dto";
import { GameEntity } from "src/shared/entities/game.entity";
import { Repository } from "typeorm";

@Injectable()
export class GameService{
    constructor(
        @InjectRepository(GameEntity) private gameRepo : Repository<GameEntity>
    ){}
    async getAll():Promise<GameDto[]>{
        const allGames : GameDto[] = await this.gameRepo.find({})
        return allGames
    }

    async getOne(gameId):Promise<GameDto>{
        let oneGame : GameDto = await this.gameRepo.findOne({
            where:{
                id:gameId
            }
        })
        return  oneGame
    }
    
    async getGameOfRound(roundId):Promise<GameDto[]>{
        const gameOfRound:GameDto[] = await this.gameRepo.find({
            where:{
                round:roundId
            }
        })
        return gameOfRound
    }

    create(){}
    update(){}
}