import { Module } from '@nestjs/common';
import { TeamModule } from './teams/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './players/player.module';
import { GameModule } from './games/game.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : 65448,
      username : "EricKt",
      password : "Vonnas01",
      database : "tfe",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
      extra : {
        validateConnection : false,
        trustServerCertificate : true
      }
    }),
    TeamModule,
    PlayerModule,
    GameModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
