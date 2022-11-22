import { Body, Controller, Inject, Post, ClassSerializerInterceptor, UseInterceptors, UseGuards, Req } from '@nestjs/common';
import { User } from '@/api/user/user.entity';
import { RegisterDto, LoginDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: RegisterDto): Promise<User | never> {
    return this.service.register(body);
  }

  // @UseGuards(LocalAuthGuard)
  // @UseGuards(JwtAuthGuard)
  @Post('login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    console.log('login');
    return this.service.login(body);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<User>user);
  }
}
