import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ProfileModule } from './profile/profile.module';
import { RecipesModule } from './recipes/recipes.module';
import { SubscribedModule } from './subscribed/subscribed.module';
@Module({
  imports: [
    RecipesModule,
    UserModule,
    AddressModule,
    ProfileModule,
    SubscribedModule
  ],
})
export class ApiModule {}
