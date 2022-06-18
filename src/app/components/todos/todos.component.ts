import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { IAppState } from '../../core/model/app-state';
import { TodoDispatch } from '../../store/dispatchers/todo.dispatchers'
import * as TodoAction from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(
    private store: Store<{ app: IAppState }>,
    private todoDispatch: TodoDispatch
  ) {}

  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoDispatch.getTodo();
  }
}
