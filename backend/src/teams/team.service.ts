import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TeamEntity } from "src/shared/entities/team.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(TeamEntity) private teamRepo: Repository<TeamEntity>
    ) { }
    async getAll() {
        const allTeams = await this.teamRepo.find({})
        return allTeams
    }

    async getOne(teamId: number) {
        const oneTeam = await this.teamRepo.findOne({

            where: {
                id: teamId
            },
            relations: {
                players: true
            }
        })

        return oneTeam
    }
    create() { }
    delete() { }
}