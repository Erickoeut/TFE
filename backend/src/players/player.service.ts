import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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
            where: { id: playerId }
        })
        return onePlayer
    }

}