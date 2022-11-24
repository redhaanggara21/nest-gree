import { Test, TestingModule } from '@nestjs/testing';
import { LogAccessService } from './log-access.service';

describe('LogAccessService', () => {
  let service: LogAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogAccessService],
    }).compile();

    service = module.get<LogAccessService>(LogAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
