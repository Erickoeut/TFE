import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";
import { PlayerDto } from "src/shared/dto/players/player.dto";
import { PlayerEntity } from "src/shared/entities/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(PlayerEntity) private playerRepo: Repository<PlayerEntity>
    ) { }

    async getAll(): Promise<PlayerDto[]> {
        const allPlayers: PlayerDto[] = await this.playerRepo.find({})
        return allPlayers
    }

    async getOnePlayerById(playerId): Promise<PlayerDto> {
        const onePlayer: PlayerDto = await this.playerRepo.findOne({
            where: { id: playerId },
            relations:{
                team:true
            }
        })
        return onePlayer
    }

    async createPlayer(player:CreatePlayerDto):Promise<PlayerDto>{
        if((await this.playerRepo.findOneBy({firstName:player.firstName}))&&(await this.playerRepo.findOneBy({lastName:player.lastName}))){
            throw new ForbiddenException('user already exist')
        }
        else{
            const createdPlayer:PlayerEntity = this.playerRepo.create(player)
            return this.playerRepo.save(createdPlayer)
        }
    }
}