import { Test, TestingModule } from '@nestjs/testing';
import { CarManufacturersService } from './car-manufacturers.service';

describe('CarManufacturersService', () => {
  let service: CarManufacturersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarManufacturersService],
    }).compile();

    service = module.get<CarManufacturersService>(CarManufacturersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
