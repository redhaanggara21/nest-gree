import {
  IsNotEmpty
} from "class-validator";

export class UpdateAddressDto {
    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    user_id: number;
}
