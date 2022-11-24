import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PointService } from './point.service';
import { CreatePointInput } from './dto/create-point.input';
import { UpdatePointInput } from './dto/update-point.input';

@Resolver('Point')
export class PointResolver {
  constructor(private readonly pointService: PointService) {}

  @Mutation('createPoint')
  create(@Args('createPointInput') createPointInput: CreatePointInput) {
    return this.pointService.create(createPointInput);
  }

  @Query('point')
  findAll() {
    return this.pointService.findAll();
  }

  @Query('point')
  findOne(@Args('id') id: number) {
    return this.pointService.findOne(id);
  }

  @Mutation('updatePoint')
  update(@Args('updatePointInput') updatePointInput: UpdatePointInput) {
    return this.pointService.update(updatePointInput.id, updatePointInput);
  }

  @Mutation('removePoint')
  remove(@Args('id') id: number) {
    return this.pointService.remove(id);
  }
}
