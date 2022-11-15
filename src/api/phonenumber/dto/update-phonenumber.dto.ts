import {
  IsNotEmpty
} from "class-validator";

export class UpdatePhonenumberDto {
  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  user_id: number;
}
