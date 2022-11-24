import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetSubArgs } from './dto/args/get-sub.args';
import { GetSubsArgs } from './dto/args/get-subs.args';
import { CreateSubscribedInput } from './dto/input/create-subscribed.input';
import { DeleteSubscribeInput } from './dto/input/delete-subscribed.input';
import { UpdateSubscribedInput } from './dto/input/update-subscribed.input';
import { Subscribed } from './models/subscribed.model';
// import { GetUserArgs } from "./dto/args/get-user.args";
// import { GetUsersArgs } from "./dto/args/get-users.args";
// import { CreateSubscribedInput } from "./dto/input/create-user.input";
// import { DeleteSubscribedInput } from "./dto/input/delete-user.input";
// import { UpdateSubscribedInput } from "./dto/input/update-user.input";

@Injectable()
export class SubscribedService {

  private subscribeds: Subscribed[] = [];

  create(createSubscribedInput: CreateSubscribedInput): Subscribed {
    const subscribe: Subscribed = {
      id: uuidv4(),
      ...createSubscribedInput
    }
    this.subscribeds.push(subscribe);

    return subscribe;
  }

  findAll(getSubsArgs: GetSubsArgs): Subscribed[] {
    return getSubsArgs.id.map(id => this.findOne({ id }));
  }

  findOne(getSubArgs: GetSubArgs): Subscribed {
    return this.subscribeds.find(subs => subs.id === getSubArgs.id);
  }

  update(id: number, updateSubscribedInput: UpdateSubscribedInput): Subscribed {
    const subs = this.subscribeds.find(subs => subs.id === updateSubscribedInput.id);
    Object.assign(subs, updateSubscribedInput);
    return subs;
  }

  remove(deleteSubs: DeleteSubscribeInput): Subscribed {
    const subsIndex = this.subscribeds.findIndex(subs => subs.id === deleteSubs.id);
    const subscribe = this.subscribeds[subsIndex];
    this.subscribeds.splice(subsIndex);
    return subscribe;
  }
}
