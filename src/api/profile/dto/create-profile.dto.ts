import {
  IsNotEmpty
} from "class-validator";

export class CreateProfileDto {
  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  user_id: string;
}
