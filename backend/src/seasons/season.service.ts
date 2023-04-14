import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GameService } from "src/games/game.service";
import { Season } from "src/shared/entities/season.entity";

import { TeamService } from "src/teams/team.service";
import { Repository } from "typeorm";

@Injectable()
export class SeasonService{
    constructor(
        @InjectRepository(Season) seasonRepo:Repository<Season>,
        private readonly teamService:TeamService,
        private readonly gameService:GameService
    ){}
}