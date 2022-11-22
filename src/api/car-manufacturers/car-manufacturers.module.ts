import { Module } from '@nestjs/common';
import { CarManufacturersService } from './car-manufacturers.service';
import { CarManufacturersController } from './car-manufacturers.controller';

@Module({
  controllers: [CarManufacturersController],
  providers: [CarManufacturersService]
})
export class CarManufacturersModule {}
