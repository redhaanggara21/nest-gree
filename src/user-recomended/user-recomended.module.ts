import { Module } from '@nestjs/common';
import { UserRecomendedService } from './user-recomended.service';
import { UserRecomendedGateway } from './user-recomended.gateway';

@Module({
  providers: [UserRecomendedGateway, UserRecomendedService]
})
export class UserRecomendedModule {}
