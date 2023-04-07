import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { PlayerService } from "./player.service";
import { PlayerEntity } from "src/shared/entities/player.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            PlayerEntity
        ])
    ],
    controllers:[PlayerController],
    providers:[PlayerService]
})
export class PlayerModule{}