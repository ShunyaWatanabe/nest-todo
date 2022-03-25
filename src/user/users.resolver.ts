import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Query((returns) => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('name') name: string, @Args('email') email: string) {
    return this.usersService.create({ name, email });
  }
}
