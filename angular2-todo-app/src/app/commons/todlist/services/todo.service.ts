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

  // update todo
  public updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // get all todos
  public  getAllTodos(): Todo[] {
    return this.todos;
  }

  // get todo/id
  public getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // toggle todo compleate
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
