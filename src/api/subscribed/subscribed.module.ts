import { Module } from '@nestjs/common';
import { SubscribedService } from './subscribed.service';
import { SubscribedResolver } from './subscribed.resolver';

@Module({
  providers: [SubscribedResolver, SubscribedService]
})
export class SubscribedModule {}
