import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameModule } from "src/games/game.module";
import { Season } from "src/shared/entities/season.entity";
import { TeamModule } from "src/teams/team.module";
import { SeasonService } from "./season.service";
import { SeasonController } from "./season.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([
        Season
        ]),
        TeamModule,
    ],
    controllers:[SeasonController],
    providers:[SeasonService],
    exports:[SeasonService]
})
export class SeasonModule{}