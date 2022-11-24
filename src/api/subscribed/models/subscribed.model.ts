import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Subscribed {

  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field()
  explain: string;

  @Field(() => Int)
  price: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}
