import {
  IsNotEmpty
} from "class-validator";

export class CreatePhonenumberDto {
  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  user_id: number;
}
