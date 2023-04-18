import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/shared/dto/signIn/signInDto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(signIn: SignInDto) :Promise<any>{
        const user = await this.usersService.findOne(signIn.username);

        if (user?.password !== signIn.password) {
            throw new UnauthorizedException('le mot de passe est incorrect');
        }
        const payload = { username: user.username }
        return {
            username:user.username,
            teamId:user.teamId,
            accessToken: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret }) 
        }
    }
}