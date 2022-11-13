import { Test, TestingModule } from '@nestjs/testing';
import { PhonenumberController } from './phonenumber.controller';
import { PhonenumberService } from './phonenumber.service';

describe('PhonenumberController', () => {
  let controller: PhonenumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonenumberController],
      providers: [PhonenumberService],
    }).compile();

    controller = module.get<PhonenumberController>(PhonenumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
