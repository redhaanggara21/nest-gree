import { CreateSubscribedInput } from './create-subscribed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateSubscribedInput extends PartialType(CreateSubscribedInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
