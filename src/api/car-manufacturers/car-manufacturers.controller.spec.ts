import { Test, TestingModule } from '@nestjs/testing';
import { CarManufacturersController } from './car-manufacturers.controller';
import { CarManufacturersService } from './car-manufacturers.service';

describe('CarManufacturersController', () => {
  let controller: CarManufacturersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarManufacturersController],
      providers: [CarManufacturersService],
    }).compile();

    controller = module.get<CarManufacturersController>(CarManufacturersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
