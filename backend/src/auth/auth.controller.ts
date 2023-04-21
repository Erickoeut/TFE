import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/shared/dto/signIn/signInDto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth-user')
@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post('login')
    signIn(
        @Body() signIn: SignInDto
    ): Promise<any>{
        return this.authService.signIn(signIn);
    }
}
