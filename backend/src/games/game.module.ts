import { Module } from "@nestjs/common";
import { GameController } from "./game.controller";
import { GameService } from "./game.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "src/shared/entities/game.entity";
import { TeamModule } from "src/teams/team.module";
import { SeasonModule } from "src/seasons/season.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Game
        ]),
        TeamModule,

    ],
    controllers: [GameController],
    providers: [GameService],
    exports:[GameService]
})
export class GameModule { }