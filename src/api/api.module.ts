import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    UserModule,
    AddressModule
  ],
})
export class ApiModule {}
