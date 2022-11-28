import { MiddlewareConsumer, Module, NestModule, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { logger } from './common/middleware/logger.middleware';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { DomainModule } from './domain/domain.module';
import { AppoloModule } from './appolo/appolo.module';
import { ScheduleModule } from '@nestjs/schedule';
import * as redisStore from 'cache-manager-redis-store';
import { TasksService } from './task.service';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      // gstore: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME, // new property
      password: process.env.REDIS_PASSWORD, // new property
      no_ready_check: true, // new property
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
    DomainModule,
    AppoloModule
    // ...databasesConfig,
    // CarManufacturersModule,
    // PointModule,
    // LogAccessModule,
    // UserRecomendedModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    TasksService
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
        .forRoutes('users');
        // .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
