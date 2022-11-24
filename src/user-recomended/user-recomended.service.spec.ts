import { Test, TestingModule } from '@nestjs/testing';
import { UserRecomendedService } from './user-recomended.service';

describe('UserRecomendedService', () => {
  let service: UserRecomendedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRecomendedService],
    }).compile();

    service = module.get<UserRecomendedService>(UserRecomendedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
