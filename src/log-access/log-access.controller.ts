import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LogAccessService } from './log-access.service';
import { CreateLogAccessDto } from './dto/create-log-access.dto';
import { UpdateLogAccessDto } from './dto/update-log-access.dto';

@Controller()
export class LogAccessController {
  constructor(private readonly logAccessService: LogAccessService) {}

  @MessagePattern('createLogAccess')
  create(@Payload() createLogAccessDto: CreateLogAccessDto) {
    return this.logAccessService.create(createLogAccessDto);
  }

  @MessagePattern('findAllLogAccess')
  findAll() {
    return this.logAccessService.findAll();
  }

  @MessagePattern('findOneLogAccess')
  findOne(@Payload() id: number) {
    return this.logAccessService.findOne(id);
  }

  @MessagePattern('updateLogAccess')
  update(@Payload() updateLogAccessDto: UpdateLogAccessDto) {
    return this.logAccessService.update(updateLogAccessDto.id, updateLogAccessDto);
  }

  @MessagePattern('removeLogAccess')
  remove(@Payload() id: number) {
    return this.logAccessService.remove(id);
  }
}
