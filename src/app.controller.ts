import { Controller, Get } from '@nestjs/common';
import { Role } from './api/user/role.enum';
import { Roles } from './api/user/roles.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Roles(Role.ADMIN)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
