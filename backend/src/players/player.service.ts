import { ForbiddenException, Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuard } from "src/auth/auth.guard";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";
import { Player } from "src/shared/entities/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Player) private playerRepo: Repository<Player>
    ) {}

    async getAll(): Promise<Player[]> {
        const allPlayers: Player[] = await this.playerRepo.find({relations:{team:true}})
        return allPlayers
    }

    async getOnePlayerById(playerId): Promise<Player|undefined> {
        const onePlayer: Player = await this.playerRepo.findOneOrFail({
            where: { id: playerId },
            relations:{
                team:true
            }
        })
        .catch(()=>{throw new NotFoundException("il n'y a pas de joueur avec cet id")})   
        
        return onePlayer
    }

    @UseGuards(AuthGuard)
    async createPlayer(player:CreatePlayerDto):Promise<Player>{
        if((await this.playerRepo.findOneBy({firstName:player.firstName}))&&(await this.playerRepo.findOneBy({lastName:player.lastName}))){
            throw new ForbiddenException('user already exist')
        }
        else{
            const createdPlayer:Player = this.playerRepo.create(player)
            return this.playerRepo.save(createdPlayer)
        }
    }
}