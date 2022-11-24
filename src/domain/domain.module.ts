import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as Joi from 'joi';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProjectModule } from './project/project.module';
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ProjectModule,
    EmployeeModule,
    CategoryModule,
  ]
})

export class DomainModule {

}
