import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Team } from "src/shared/entities/team.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team) private teamRepo: Repository<Team>
    ) { }
    async getAll():Promise<Team[]> {
        const allTeams:Team[]= await this.teamRepo.find({})
        return allTeams
    }

    async getOne(teamId: number):Promise<Team> {
        const oneTeam:Team = await this.teamRepo.findOneOrFail({
            where: {
                id: teamId
            },
            relations: {
                players: true,
                homeGames:{
                    season:true,
                    awayTeam:true,
                    homePlayers:true
                },
                awayGames:{
                    season:true,
                    homeTeam:true,
                    awayPlayers:true
                }
            }
        }).catch(()=>{
            throw new NotFoundException("il n'y a pas d'equipe avec cet id")
        }
        )
        if(oneTeam){return oneTeam}
        
    }

}