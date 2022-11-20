import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { PhonenumberModule } from './phonenumber/phonenumber.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ProfileModule
    // PhonenumberModule
  ],
})
export class ApiModule {}
