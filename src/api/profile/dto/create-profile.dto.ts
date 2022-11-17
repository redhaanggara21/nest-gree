import {
  IsNotEmpty,
  IsOptional
} from "class-validator";

export class CreateProfileDto {
  @IsOptional()
  photo: string;

  @IsNotEmpty()
  user_id: string;
}
