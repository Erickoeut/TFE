import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule,JwtService } from '@nestjs/jwt'
import { jwtConstants } from './constants';

@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3660s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
  exports: [AuthService],
})
export class AuthModule {}
