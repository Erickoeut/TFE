import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameModule } from "src/games/game.module";
import { Season } from "src/shared/entities/season.entity";
import { TeamModule } from "src/teams/team.module";

@Module({
    imports:[
        TypeOrmModule.forFeature([
        Season
        ]),
        TeamModule,
        GameModule
    ],
    controllers:[],
    providers:[]
})
export class SeasonModule{}