import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { logger } from './common/middleware/logger.middleware';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { MulterModule } from '@nestjs/platform-express';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
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
