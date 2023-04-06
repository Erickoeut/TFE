import { Controller, Get, Param } from "@nestjs/common";
import { TeamService } from "./team.service";

@Controller("api/teams")
export class TeamController{
    constructor(
        private readonly teamServe:TeamService
    ){}
    @Get()
    getAll(){
        return this.teamServe.getAll()
    }

    @Get(":teamId")
    
    getOne(
        @Param("teamId") teamId
    ){
        return this.teamServe.getOne(teamId)
    }
}