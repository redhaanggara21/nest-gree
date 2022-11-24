import { PartialType } from '@nestjs/mapped-types';
import { CreateLogAccessDto } from './create-log-access.dto';

export class UpdateLogAccessDto extends PartialType(CreateLogAccessDto) {
  id: number;
}
