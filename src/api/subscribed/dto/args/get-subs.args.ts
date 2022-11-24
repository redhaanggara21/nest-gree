import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export class GetSubsArgs {
    @Field(() => [Number])
    @IsArray()
    id: number[];
}
