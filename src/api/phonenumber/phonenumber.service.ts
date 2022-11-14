import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhonenumberDto } from './dto/create-phonenumber.dto';
import { UpdatePhonenumberDto } from './dto/update-phonenumber.dto';
import { Phonenumber } from './entities/phonenumber.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhonenumberService {

  // @InjectRepository(Phonenumber)
  // private readonly repository: Repository<Phonenumber>;

  create(createPhonenumberDto: CreatePhonenumberDto) {
    // return this.repository.save(createPhonenumberDto);
  }

  findAll() {
    // return this.repository.find();
  }

  findOne(id: number){
    // return this.repository.findOne(id);
  }

  update(id: number, updatePhonenumberDto: UpdatePhonenumberDto) {
    // return this.repository.update(id, updatePhonenumberDto);
  }

  remove(id: number) {
    // return this.repository.delete(id);
  }
}
