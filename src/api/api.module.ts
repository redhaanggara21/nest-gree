import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { Phonenumber } from './phoneNumber/entities/phonenumber.entity';

@Module({
  imports: [
    UserModule,
    AddressModule,
    Phonenumber
  ],
})
export class ApiModule {}
