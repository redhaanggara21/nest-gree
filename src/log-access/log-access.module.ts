import { Module } from '@nestjs/common';
import { LogAccessService } from './log-access.service';
import { LogAccessController } from './log-access.controller';

@Module({
  controllers: [LogAccessController],
  providers: [LogAccessService]
})
export class LogAccessModule {}
