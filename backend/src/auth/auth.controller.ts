import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/shared/dto/signIn/signInDto';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post('login')
    signIn(
        @Body() signIn: SignInDto
    ): Promise<{accessToken}>{
        return this.authService.signIn(signIn);
    }
}
