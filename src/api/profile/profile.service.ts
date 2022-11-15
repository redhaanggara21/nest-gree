import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {

  @InjectRepository(Profile)
  private readonly repository: Repository<Profile>;

  create(createProfileDto: any): Promise<Profile>  {
    return this.repository.save(createProfileDto);
  }

  async findAll(): Promise<Profile[]> {

    // return this.repository.find();
    const profiles =  await this.repository
      .createQueryBuilder("profile")
      .leftJoinAndSelect("profile.user", "user")
      .getMany();

    return profiles;
  }

  findOne(id: number): Promise<Profile>{
    return  this.repository.findOne(id);
  }

  update(id: number, updateProfileDto: any): Promise<any> {
    return this.repository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
