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

  async findAll(): Promise<User[]> {
    const users = this.repository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.profile", "profile")
      .distinct(true)
      .getMany();

    return users;
  }

  async findOne(id: number): Promise<User> {
    const users = this.repository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.profile", "profile")
      .where('user.id=:id',{id: id})
      .distinct(true)
      .getOne();

    return users;
  }

  update(id: number, address: CreateUserDto): Promise<any>  {
    return this.repository.update(id, address);
  }

  async remove(id: number) {
    const exist = await this.findOne(id);
    exist.isActivated = false;
    exist.deletedAt = new Date();
    return this.repository.update(id, exist);
  }
}
