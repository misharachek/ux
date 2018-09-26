import {Injectable} from '@angular/core';

// entity
import {Todo} from '../entities';

@Injectable()
export class TodoService {

  // automatc incrementing of ids
  lastId: number = 0;

  // array todos
  todos: Todo[] = [];

  // post dodos
  public addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // delete todo
  public deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

}
