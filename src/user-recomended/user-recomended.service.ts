import { Injectable } from '@nestjs/common';
import { CreateUserRecomendedDto } from './dto/create-user-recomended.dto';
import { UpdateUserRecomendedDto } from './dto/update-user-recomended.dto';

@Injectable()
export class UserRecomendedService {
  create(createUserRecomendedDto: CreateUserRecomendedDto) {
    return 'This action adds a new userRecomended';
  }

  findAll() {
    return `This action returns all userRecomended`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRecomended`;
  }

  update(id: number, updateUserRecomendedDto: UpdateUserRecomendedDto) {
    return `This action updates a #${id} userRecomended`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRecomended`;
  }
}
