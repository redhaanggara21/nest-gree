import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarManufacturersService } from './car-manufacturers.service';
import { CreateCarManufacturerDto } from './dto/create-car-manufacturer.dto';
import { UpdateCarManufacturerDto } from './dto/update-car-manufacturer.dto';
import { CarManufacturer } from './entities/car-manufacturer.entity';

@Controller('car-manufacturers')
export class CarManufacturersController {
  constructor(private readonly carManufacturersService: CarManufacturersService) {}

  @Post()
  create(@Body() createCarManufacturerDto: CreateCarManufacturerDto) {
    // return this.carManufacturersService.create(createCarManufacturerDto);
  }

  @Get(':country')
  findAll(@Param('country') country: string): Promise<CarManufacturer[]> {
      return this.carManufacturersService.findAll(country);
    // return this.carManufacturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.carManufacturersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarManufacturerDto: UpdateCarManufacturerDto) {
    // return this.carManufacturersService.update(+id, updateCarManufacturerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.carManufacturersService.remove(+id);
  }
}
