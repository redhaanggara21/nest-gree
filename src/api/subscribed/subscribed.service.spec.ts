import { Test, TestingModule } from '@nestjs/testing';
import { SubscribedService } from './subscribed.service';

describe('SubscribedService', () => {
  let service: SubscribedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscribedService],
    }).compile();

    service = module.get<SubscribedService>(SubscribedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
