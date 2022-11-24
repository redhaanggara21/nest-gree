import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubscribedService } from './subscribed.service';
import { CreateSubscribedInput } from './dto/input/create-subscribed.input';
import { Subscribed } from './models/subscribed.model';
import { UseGuards } from '@nestjs/common';
import { GetSubsArgs } from './dto/args/get-subs.args';
import { UpdateSubscribedInput } from './dto/input/update-subscribed.input';
import { DeleteSubscribeInput } from './dto/input/delete-subscribed.input';
import { GetSubArgs } from './dto/args/get-sub.args';
// import { GraphqlJwtAuthGuard } from '../authentication/graphql-jwt-auth.guard';

@Resolver(() => Subscribed)
export class SubscribedResolver {
  constructor(private readonly subscribedService: SubscribedService) {}

  @Mutation(() => Subscribed)
  // @UseGuards(GraphqlJwtAuthGuard)
  createSubscribed(@Args('createSubscribedInput') createSubscribedInput: CreateSubscribedInput): Subscribed {
    return this.subscribedService.create(createSubscribedInput);
  }

  @Query(() => [Subscribed], { name: 'subscribed', nullable: 'items' })
  findAll(@Args() GetSubArgs: GetSubsArgs): Subscribed[] {
    return this.subscribedService.findAll(GetSubArgs);
  }

  @Query(() => Subscribed, { name: 'subscribed', nullable: true  })
  findOne(@Args() GetSubArgs: GetSubArgs): Subscribed {
    return this.subscribedService.findOne(GetSubArgs);
  }

  @Mutation(() => Subscribed)
  updateSubscribed(@Args('updateSubscribedInput') updateSubscribedInput: UpdateSubscribedInput): Subscribed {
    return this.subscribedService.update(updateSubscribedInput.id, updateSubscribedInput);
  }

  @Mutation(() => Subscribed)
  removeSubscribed(@Args('deleteSubscribeInput') deleteSubscribeInput: DeleteSubscribeInput): Subscribed {
    return this.subscribedService.remove(deleteSubscribeInput);
  }
}
