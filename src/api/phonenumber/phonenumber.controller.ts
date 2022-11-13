import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonenumberService } from './phonenumber.service';
import { CreatePhonenumberDto } from './dto/create-phonenumber.dto';
import { UpdatePhonenumberDto } from './dto/update-phonenumber.dto';

@Controller('phonenumber')
export class PhonenumberController {
  constructor(private readonly phonenumberService: PhonenumberService) {}

  @Post()
  create(@Body() createPhonenumberDto: CreatePhonenumberDto) {
    return this.phonenumberService.create(createPhonenumberDto);
  }

  @Get()
  findAll() {
    return this.phonenumberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonenumberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhonenumberDto: UpdatePhonenumberDto) {
    return this.phonenumberService.update(+id, updatePhonenumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonenumberService.remove(+id);
  }
}
