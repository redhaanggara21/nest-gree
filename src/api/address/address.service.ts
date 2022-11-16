import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../address/entities/address.entity'
import { Repository } from 'typeorm';
@Injectable()
export class AddressService {

  @InjectRepository(Address)
  private readonly repository: Repository<Address>;

  create(createAddressDto: CreateAddressDto): Promise<Address>  {
    return this.repository.save(createAddressDto);
  }

  findAll(): Promise<Address[]> {
    return this.repository.find();
  }

  findOne(id: any): Promise<Address>{
    return  this.repository.findOne(id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto): Promise<any> {
    return this.repository.update(id, updateAddressDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

}
