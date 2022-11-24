import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRecomendedDto } from './create-user-recomended.dto';

export class UpdateUserRecomendedDto extends PartialType(CreateUserRecomendedDto) {
  id: number;
}
