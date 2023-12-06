import { Module } from '@nestjs/common';
import { TeamModule } from './teams/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './players/player.module';
import { GameModule } from './games/game.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WeatherModule } from './weather/weather.module';
import { SeasonModule } from './seasons/season.module';
import { Game } from './shared/entities/game.entity';
import { Player } from './shared/entities/player.entity';
import { Season } from './shared/entities/season.entity';
import { Team } from './shared/entities/team.entity';
import { User } from './shared/entities/users.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/db/db.sqlite',
      entities: [
        Game,
        Player,
        Season,
        Team,
        User
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TeamModule,
    PlayerModule,
    GameModule,
    SeasonModule,
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
