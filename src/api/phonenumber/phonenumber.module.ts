import { Module } from '@nestjs/common';
import { PhonenumberService } from './phonenumber.service';
import { PhonenumberController } from './phonenumber.controller';
import { Phonenumber } from './entities/phonenumber.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Phonenumber])],
  controllers: [PhonenumberController],
  providers: [PhonenumberService]
})
export class PhonenumberModule {}
