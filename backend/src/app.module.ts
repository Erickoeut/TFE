import { Module } from '@nestjs/common';
import { TeamModule } from './teams/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : 1433,
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
    TeamModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
