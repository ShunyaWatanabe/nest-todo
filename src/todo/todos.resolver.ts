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

  @Query((returns) => [Todo])
  async todos() {
    return this.todosService.findAll();
  }

  @Query((returns) => [Todo])
  async todosByUserId(@Args('userId') userId: number) {
    return this.todosService.findByUserId(userId);
  }

  @Mutation(() => Todo)
  async addTodo(
    @Args('userId') userId: number,
    @Args('title') title: string,
    @Args('description') description: string,
  ) {
    return this.todosService.create({ title, description, userId });
  }
}
