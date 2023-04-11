import { Module } from '@nestjs/common';
import { TeamModule } from './teams/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './players/player.module';
import { GameModule } from './games/game.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : parseInt(process.env.DATABASE_PORT),
      username : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
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
    GameModule,
    UsersModule,
    // AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
