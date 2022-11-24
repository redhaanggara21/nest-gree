import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { UserRecomendedService } from './user-recomended.service';
import { CreateUserRecomendedDto } from './dto/create-user-recomended.dto';
import { UpdateUserRecomendedDto } from './dto/update-user-recomended.dto';

@WebSocketGateway()
export class UserRecomendedGateway {
  constructor(private readonly userRecomendedService: UserRecomendedService) {}

  @SubscribeMessage('createUserRecomended')
  create(@MessageBody() createUserRecomendedDto: CreateUserRecomendedDto) {
    return this.userRecomendedService.create(createUserRecomendedDto);
  }

  @SubscribeMessage('findAllUserRecomended')
  findAll() {
    return this.userRecomendedService.findAll();
  }

  @SubscribeMessage('findOneUserRecomended')
  findOne(@MessageBody() id: number) {
    return this.userRecomendedService.findOne(id);
  }

  @SubscribeMessage('updateUserRecomended')
  update(@MessageBody() updateUserRecomendedDto: UpdateUserRecomendedDto) {
    return this.userRecomendedService.update(updateUserRecomendedDto.id, updateUserRecomendedDto);
  }

  @SubscribeMessage('removeUserRecomended')
  remove(@MessageBody() id: number) {
    return this.userRecomendedService.remove(id);
  }
}
