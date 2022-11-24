import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateSubscribedInput {
  @Field(() => Int, { description: 'Example field (subs id = 2333)' })
  @IsNotEmpty()
  user_id: number;

  @Field(() => String, { description: 'Example field (subs explain = the user decision for subs)' })
  explain: string;

  @Field(() => Int, { description: 'Example field (subs price = 2000)' })
  price: number;

  @Field(() => Boolean, { nullable: false, description: 'Example field (subs subscribed = true)'  })
  isSubscribed?: boolean;

}
