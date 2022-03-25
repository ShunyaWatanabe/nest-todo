import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { Todo } from './todo.model';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}
