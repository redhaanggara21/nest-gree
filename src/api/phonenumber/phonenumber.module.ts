import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhonenumberService } from './phonenumber.service';
import { PhonenumberController } from './phonenumber.controller';
import { Phonenumber } from './entities/phonenumber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phonenumber])],
  controllers: [PhonenumberController],
  providers: [PhonenumberService]
})
export class PhonenumberModule {}
