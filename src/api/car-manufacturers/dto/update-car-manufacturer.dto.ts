import { PartialType } from '@nestjs/swagger';
import { CreateCarManufacturerDto } from './create-car-manufacturer.dto';

export class UpdateCarManufacturerDto extends PartialType(CreateCarManufacturerDto) {}
