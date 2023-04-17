import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameService } from "src/games/game.service";
import { Season } from "src/shared/entities/season.entity";

import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class SeasonService {
    constructor(
        @InjectRepository(Season) private seasonRepo: Repository<Season>,
        private readonly teamService: TeamService,
        private readonly gameService: GameService
    ) { }

    async getAll():Promise<Season[]> {
        const allSeason: Season[] = await this.seasonRepo.find({})
        return allSeason
    }

    async getRanking() { //seasonId a ajouter
        const teams = await this.teamService.getAll()
        const ranking=[]
        for (const team of teams) {
            const teamResults = await this.gameService.getGameOfTeam(team.id)
            const teamRanking={
                ...team,
                teamPoints : 0,
                scoreFor : 0,
                scoreAgainst :0,
                scoreDifference:0
            } 

            //TODO : Ajouter seasonId a game
            // teamResults.homeGames.filter(game=>game.seasonId===seasonId)
            // teamResults.awayGames.filter(game=>game.seasonId===seasonId)
            
            for (const game of teamResults.homeGames) {
                if (game.finish) {
                    teamRanking.scoreFor+=game.homeScore
                    teamRanking.scoreAgainst+=game.awayScore
                    if (game.homeScore > game.awayScore) {
                        teamRanking.teamPoints += 4
                    }
                    else if(game.homeScore===game.awayScore){
                        teamRanking.teamPoints +=2
                    }
                }
            }

            for (const game of teamResults.awayGames) {
                if (game.finish) {
                    teamRanking.scoreFor+=game.awayScore
                    teamRanking.scoreAgainst+=game.homeScore
                    if (game.homeScore < game.awayScore) {
                        teamRanking.teamPoints += 4
                    }
                    else if(game.homeScore===game.awayScore){
                        teamRanking.teamPoints +=2
                    }
                }
            }

            teamRanking.scoreDifference=teamRanking.scoreFor-teamRanking.scoreAgainst
            ranking.push(teamRanking)
        }
        ranking.sort((a,b)=>{
            if( b.teamPoints-a.teamPoints===0){
                return b.scoreDifference-a.scoreDifference
            }
            return b.teamPoints-a.teamPoints
        })
        
        return ranking
    }
}