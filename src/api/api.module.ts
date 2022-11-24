import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { PhonenumberModule } from './phonenumber/phonenumber.module';
import { ProfileModule } from './profile/profile.module';
import { RecipesModule } from './recipes/recipes.module';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { upperDirectiveTransformer } from '@/common/directives/upper-case.directive';
import { SubscribedModule } from './subscribed/subscribed.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
@Module({
  imports: [
    RecipesModule,
    UserModule,
    AddressModule,
    ProfileModule,
    SubscribedModule,
    // PhonenumberModule
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: 'schema.gql',
    //   transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
    //   installSubscriptionHandlers: true,
    //   buildSchemaOptions: {
    //     directives: [
    //       new GraphQLDirective({
    //         name: 'upper',
    //         locations: [DirectiveLocation.FIELD_DEFINITION],
    //       }),
    //     ],
    //   },
    // }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   autoSchemaFile: true,
    //   driver: ApolloDriver,
    // }),

    // GraphQLModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     playground: Boolean(configService.get('GRAPHQL_PLAYGROUND')),
    //     autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   })
    // }),
  ],
})
export class ApiModule {}
