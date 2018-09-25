import {
  TestBed,
  inject
} from '@angular/core/testing';

// entity
import {Todo} from '../entities';

import {TodoService} from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});

describe('public method addTodo', () => {

  it('should automaticaly assign an incrementing id', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello1', complete: false});
    let todo2 = new Todo({title: 'Hello2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getTodoById(1)).toEqual(todo1);
    expect(service.getTodoById(2)).toEqual(todo2);
  }));
});

describe('public method deleteTodoById', () => {

  it('should remove todo witch the corresponding id', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', complete: false});
    let todo2 = new Todo({title: 'Hello 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodoById(1);
    expect(service.getAllTodos()).toEqual([todo2]);
    service.deleteTodoById(2);
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should not removing todo witch the corresponding id is not found', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', complete: false});
    let todo2 = new Todo({title: 'Hello 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodoById(3);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));
});

describe('public method update todById', () => {

  it('should return todo with the corresponding id and updated data', inject([TodoService], (service: TodoService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.updateTodoById(1, {
      title: 'new title'
    });
    expect(updatedTodo.title).toEqual('new title');
  }));

  it('should return null if todo is not found', inject([TodoService], (service: TodoService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.updateTodoById(2, {
      title: 'new title'
    });
    expect(updatedTodo).toEqual(null);
  }));
});

describe('public method getAllTodos()', () => {

  it('should return an empty array by default', inject([TodoService], (service: TodoService) => {
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should return all todos', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', complete: false});
    let todo2 = new Todo({title: 'Hello 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));
});

describe('public method toggleTodoComplete', () => {

  it('should return the updated todo with inverse complete status', inject([TodoService], (service: TodoService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.toggleTodoComplete(todo);
    expect(updatedTodo.complete).toEqual(true);
    service.toggleTodoComplete(todo);
    expect(updatedTodo.complete).toEqual(false);
  }));
});

