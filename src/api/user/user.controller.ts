import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
  Query,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '@/common/paginate/decorators';
import { PageDto, PageOptionsDto } from '@/common/paginate/dtos';
@Controller('users')
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltOrRounds);
    body.password = hashedPassword;
    return this.service.create(body);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  // @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  @ApiPaginatedResponse(CreateUserDto)
  async findAll(
    @Query() pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<CreateUserDto>> {
    return this.service.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() address: CreateUserDto) {
    return this.service.update(+id, address);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
