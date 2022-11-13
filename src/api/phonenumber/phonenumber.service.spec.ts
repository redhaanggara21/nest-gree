import { Test, TestingModule } from '@nestjs/testing';
import { PhonenumberService } from './phonenumber.service';

describe('PhonenumberService', () => {
  let service: PhonenumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonenumberService],
    }).compile();

    service = module.get<PhonenumberService>(PhonenumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
