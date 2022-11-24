import { Test, TestingModule } from '@nestjs/testing';
import { UserRecomendedGateway } from './user-recomended.gateway';
import { UserRecomendedService } from './user-recomended.service';

describe('UserRecomendedGateway', () => {
  let gateway: UserRecomendedGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRecomendedGateway, UserRecomendedService],
    }).compile();

    gateway = module.get<UserRecomendedGateway>(UserRecomendedGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
