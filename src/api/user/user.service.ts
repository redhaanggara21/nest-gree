import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

  @InjectRepository(User)
  private readonly repository: Repository<User>;

  create(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = body.name;
    user.username = body.username;
    user.email = body.email;
    user.password = body.password;
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  update(id: number, address: CreateUserDto): Promise<any>  {
    return this.repository.update(id, address);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
