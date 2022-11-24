import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteSubscribeInput {
    @Field()
    @IsNotEmpty()
    id: number;
}
