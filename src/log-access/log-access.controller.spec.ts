import { Test, TestingModule } from '@nestjs/testing';
import { LogAccessController } from './log-access.controller';
import { LogAccessService } from './log-access.service';

describe('LogAccessController', () => {
  let controller: LogAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogAccessController],
      providers: [LogAccessService],
    }).compile();

    controller = module.get<LogAccessController>(LogAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
