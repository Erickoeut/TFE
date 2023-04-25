import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { PlayerService } from "./player.service";
import { Player } from "src/shared/entities/player.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TeamModule } from "src/teams/team.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Player
        ]),
        TeamModule
    ],
    controllers: [PlayerController],
    providers: [PlayerService],
    exports:[PlayerService]
})
export class PlayerModule { }