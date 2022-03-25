import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todosRepository.findOne(id);
  }

  findByUserId(userId: number): Promise<Todo[]> {
    return this.todosRepository.find({
      where: { userId },
    });
  }

  create(params: {
    userId: number;
    title: string;
    description: string;
  }): Promise<Todo> {
    return this.todosRepository.save(params);
  }

  async remove(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
