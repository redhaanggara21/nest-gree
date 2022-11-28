import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ProfileModule } from './profile/profile.module';
import { RecipesModule } from './recipes/recipes.module';
import { SubscribedModule } from './subscribed/subscribed.module';
import { EmailModule } from './email/email.module';
@Module({
  imports: [
    RecipesModule,
    UserModule,
    AddressModule,
    ProfileModule,
    SubscribedModule,
    EmailModule
  ],
})
export class ApiModule {}
