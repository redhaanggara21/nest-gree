import { CreatePointInput } from './create-point.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePointInput extends PartialType(CreatePointInput) {
  id: number;
}
