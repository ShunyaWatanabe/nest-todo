import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';

@Resolver((of) => Todo)
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query((returns) => Todo)
  async todo(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.findOne(id);
  }

  @Mutation(() => Todo)
  async addTodo(
    @Args('title') title: string,
    @Args('description') description: string,
  ) {
    return this.todosService.create({ title, description });
  }
}
