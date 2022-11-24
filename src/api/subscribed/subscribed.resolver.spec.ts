import { Test, TestingModule } from '@nestjs/testing';
import { SubscribedResolver } from './subscribed.resolver';
import { SubscribedService } from './subscribed.service';

describe('SubscribedResolver', () => {
  let resolver: SubscribedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscribedResolver, SubscribedService],
    }).compile();

    resolver = module.get<SubscribedResolver>(SubscribedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
