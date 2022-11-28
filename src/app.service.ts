import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios'
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService
    // private schedulerRegistry: SchedulerRegistry
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async addToCache(key: string, item: string) {
    await this.cacheManager.set(key, item);
  }

  async getFromCache(key: string) {
    const value = await this.cacheManager.get(key);
    return value;
  }

  async getPokemon(id: number): Promise<string> {
   // check if data is in cache:
   const cachedData = await this.cacheManager.get<{ name: string }>(
      id.toString(),
    );
    if (cachedData) {
      console.log(`Getting data from cache!`);
      return `${cachedData.name}`;
    }

    // if not, call API and set the cache:
    const { data } = await this.httpService.axiosRef.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    await this.cacheManager.set(id.toString(), data);
    return await `${data.name}`;
  }

  // @Cron('* * * * * *')
  @Cron('4 * * * * *', {
    name: 'messaging',
    timeZone: 'America/New_York'
  })
  triggerCronJob() {
    console.log("Calling the method every second");
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  triggerCronJobFiveSeconds() {
      console.log("Calling the method every 5 seconds");
  }

  @Interval(2000)
  triggerMethodBasedOnInterval(){
    console.log("Triggering the method after interval of 2 seconds");
  }

  @Interval('messaging', 3500)
  triggerMethodBasedOnNamedInterval() {
    console.log("Triggering the method after 3.5 seconds based on named interval");
  }

  // @Timeout(3000)
  @Timeout('messaging', 3500)
  handleTimeout() {
      console.log("Calling method once after timeout of 3 seconds");
  }

}
