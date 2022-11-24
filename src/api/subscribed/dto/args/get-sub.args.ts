import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetSubArgs {
    @Field()
    @IsNotEmpty()
    id: number;
}
