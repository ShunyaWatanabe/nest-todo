import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todo/todos.module';
import { Todo } from './todo/todo.model';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-server',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [Todo],
      synchronize: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}
