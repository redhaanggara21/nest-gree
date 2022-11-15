import {
  IsNotEmpty
} from "class-validator";

export class UpdateProfileDto {
  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  user_id: string;
}
