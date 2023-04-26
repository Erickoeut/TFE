import { ForbiddenException, Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlayerDto } from "src/shared/dto/players/createPlayer.dto";
import { Player } from "src/shared/entities/player.entity";
import { TeamService } from "src/teams/team.service";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Player) private playerRepo: Repository<Player>,
        private readonly teamService: TeamService
    ) { }

    async getAll(): Promise<Player[]> {
        const allPlayers: Player[] = await this.playerRepo.find({
            relations: { team: true },
            order: { id: "ASC" }
        })
        return allPlayers
    }

    async getOnePlayerById(playerId): Promise<Player> {
        const onePlayer: Player = await this.playerRepo.findOneOrFail({
            where: { id: playerId },
            relations: {
                team: true
            }
        })
        .catch(() => { throw new NotFoundException("il n'y a pas de joueur avec cet id") })
        return onePlayer
    }

    async createPlayer(player: CreatePlayerDto): Promise<Player> {
        if ((await this.playerRepo.findOneBy({ firstName: player.firstName })) && (await this.playerRepo.findOneBy({ lastName: player.lastName }))) {
            throw new ForbiddenException('user already exist')
        }
        else {
            const team = await this.teamService.getOne(player.teamId)
            const playerToCreate = {
                ...player,
                team: team
            }
            const createdPlayer: Player = this.playerRepo.create(playerToCreate)
            return this.playerRepo.save(createdPlayer)
        }
    }

    async deletePlayer(id): Promise<DeleteResult> {
        const playerToDelete = await this.getOnePlayerById(id)
        return await this.playerRepo.delete(playerToDelete)
    }
}