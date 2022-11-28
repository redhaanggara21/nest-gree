import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // @Cron('45 * * * * *')
  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    // this.logger.debug('Called when the current second is 45');
    this.logger.debug('Called every 30 seconds');
  }
}
