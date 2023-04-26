import {NotFoundException, BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Season } from "src/shared/entities/season.entity";
import { Team } from "src/shared/entities/team.entity";
import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class SeasonService {
    constructor(
        @InjectRepository(Season) private seasonRepo: Repository<Season>,
        private readonly teamService: TeamService,
    ) { }

    async getAll(): Promise<Season[]> {
        const allSeason: Season[] = await this.seasonRepo.find({})
        return allSeason
    }
    
    async getOne(seasonId): Promise<Season> {
        const oneSeason: Season = await this.seasonRepo.findOneOrFail(
            {   
                where:{
                    id:seasonId
                },
                relations:{
                    games:{
                        homeTeam:true,
                        awayTeam:true
                    }
                }
            }
        )
        .catch(()=>{throw new NotFoundException('pas de saison avec cet id')})
        const oneUpdatedSeason = await this.updatenbRoundSeason(oneSeason)
        return oneUpdatedSeason
    }
    
    //pas dans le controller mais utilisé pour creer un match 
    async findOneByYear(year){
        const season:Season = await this.seasonRepo.findOne({where:{
            year:year
        }})
        return season
    }

    async createOne(year){
        const seasonExist = await this.findOneByYear(year)
        if(seasonExist){
            throw new BadRequestException('la saison existe déja')
        }
        else{
            const newSaison = await this.seasonRepo.create({year:year})
            return this.seasonRepo.save(newSaison)
        }
    }

    async updatenbRoundSeason(season:Season){
        const games = season.games
        season.nbOfRound = Math.max(...games.map(game=>game.round))
        return this.seasonRepo.save(season)        
    }

    async getRanking(seasonId): Promise<any> { 
        const season:Season = await this.getOne(seasonId)
        const teams: Team[] = await this.teamService.getAll()
        const ranking = []
        for (const team of teams) {
            const teamHomeResults = ((await this.teamService.getOne(team.id)).homeGames).filter(game=>game.season.id===seasonId)
            const teamAwayResults = ((await this.teamService.getOne(team.id)).awayGames).filter(game=>game.season.id===seasonId)
            const teamRanking = {
                ...team,
                position: 0,
                gamePlayed: 0,
                teamPoints: 0,
                win: 0,
                draw: 0,
                lost: 0,
                scoreFor: 0,
                scoreAgainst: 0,
                scoreDifference: 0
            }

            for (const game of teamHomeResults) {
                if (game.finish) {
                    teamRanking.gamePlayed += 1
                    teamRanking.scoreFor += game.homeScore
                    teamRanking.scoreAgainst += game.awayScore
                    if (game.homeScore > game.awayScore) {
                        teamRanking.teamPoints += 4
                        teamRanking.win += 1
                    }
                    else if (game.homeScore === game.awayScore) {
                        teamRanking.teamPoints += 2
                        teamRanking.draw += 1
                    }
                    else {
                        teamRanking.lost += 1
                    }
                }
            }

            for (const game of teamAwayResults) {
                if (game.finish) {
                    teamRanking.gamePlayed += 1
                    teamRanking.scoreFor += game.awayScore
                    teamRanking.scoreAgainst += game.homeScore
                    if (game.homeScore < game.awayScore) {
                        teamRanking.teamPoints += 4
                        teamRanking.win += 1
                    }
                    else if (game.homeScore === game.awayScore) {
                        teamRanking.teamPoints += 2
                        teamRanking.draw += 1
                    }
                    else {
                        teamRanking.lost += 1
                    }
                }
            }

            teamRanking.scoreDifference = teamRanking.scoreFor - teamRanking.scoreAgainst
            ranking.push(teamRanking)
        }
        ranking.sort((a, b) => {
            if (b.teamPoints - a.teamPoints === 0) {
                return b.scoreDifference - a.scoreDifference
            }
            return b.teamPoints - a.teamPoints
        })

        return {
            ...season,
            ranking:ranking
        }
    }
}