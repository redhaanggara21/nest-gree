import { Controller, Get, Res } from '@nestjs/common';
import { Role } from './api/user/role.enum';
import { Roles } from './api/user/roles.decorator';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Roles(Role.ADMIN)
  @Get()
  getHello(@Res() res: Response): void {
    const headline: string = "This Headline";
    const body: string = "This Body for example page, writing anything here just example";
    const footer: string = "Footer the page";
    return res.render('./views/index.njk', { headline, body, footer });
  }

}
