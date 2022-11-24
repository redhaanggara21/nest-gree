import { Injectable } from '@nestjs/common';
import { CreateLogAccessDto } from './dto/create-log-access.dto';
import { UpdateLogAccessDto } from './dto/update-log-access.dto';

@Injectable()
export class LogAccessService {
  create(createLogAccessDto: CreateLogAccessDto) {
    return 'This action adds a new logAccess';
  }

  findAll() {
    return `This action returns all logAccess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logAccess`;
  }

  update(id: number, updateLogAccessDto: UpdateLogAccessDto) {
    return `This action updates a #${id} logAccess`;
  }

  remove(id: number) {
    return `This action removes a #${id} logAccess`;
  }
}
