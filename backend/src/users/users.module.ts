import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/users.entity';
import { TeamModule } from 'src/teams/team.module';
import { UsersController } from './users.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      User
    ]),
    TeamModule
  ],
  controllers:[UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}