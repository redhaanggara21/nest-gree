import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '@/common/exception-filter/http-exception.filter';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
