import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig, { getDatabaseSystemIds } from './common/config/orm.config';
import { getEnvPath } from './common/helper/env.helper';
import { logger } from './common/middleware/logger.middleware';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { CarManufacturersModule } from './api/car-manufacturers/car-manufacturers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { RecipesModule } from './api/recipes/recipes.module';
import { PointModule } from './point/point.module';
import { LogAccessModule } from './log-access/log-access.module';
import { UserRecomendedModule } from './user-recomended/user-recomended.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import * as Joi from '@hapi/joi';
import { DomainModule } from './domain/domain.module';
import { AppoloModule } from './appolo/appolo.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

// database connection for each system id
// const databasesConfig = getDatabaseSystemIds().map((systemId) => {
//   return TypeOrmModule.forRootAsync({
//     name: `database-${systemId}`,
//     imports: [ConfigModule.forFeature(ormConfig)],
//     useFactory: (config: ConfigService) => config.get(`orm.${systemId}`),
//     inject: [ConfigService],
//   });
// });

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      // autoSchemaFile: true,
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.schama.ts'),
      //   outputAs: 'class'
      // },
      // transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      // installSubscriptionHandlers: true,
      // driver: ApolloDriver,
      // playground: false,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      //   buildSchemaOptions: {
      //     directives: [
      //       new GraphQLDirective({
      //         name: 'upper',
      //         locations: [DirectiveLocation.FIELD_DEFINITION],
      //       }),
      //     ],
      //   },
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
