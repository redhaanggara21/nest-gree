import { PageDto, PageMetaDto, PageOptionsDto } from '@/common/paginate/dtos';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll(
    pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<CreateUserDto>> {

    const queryBuilder = this.repository.createQueryBuilder("user");
    queryBuilder
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.profile", "profile")
      .distinct(true)
      .where("user.email LIKE :s ",{ s: `%${pageOptionsDto.email}%` })
      .orderBy('user.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.limit)
      .getMany();

      const itemCount = await queryBuilder.getCount();
      const { entities } = await queryBuilder.getRawAndEntities();
      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
      return new PageDto(entities, pageMetaDto);
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

  async getByEmail(email: any) {
    const user = await this.repository.findOne(email);
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }

  async getById(id: any) {
    const user = await this.repository.findOne(id);
    if (user) {
      return user;
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  }

}
