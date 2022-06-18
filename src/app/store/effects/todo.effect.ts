import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TodoAction from '../actions/todo.actions'
import { IAppState } from '../../core/model/app-state';
import { ITodo } from '../../core/model/todo';


@Injectable({
  providedIn: 'root',
})
export class TodoEffect {
  constructor(
    private http: HttpClient,
    private action$: Actions,
    private store: Store<{ app: IAppState }>
  ) {}

  loadTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(TodoAction.loadTodo),
      withLatestFrom(
        this.store.select('app').pipe(map((app: IAppState) => app.todos))
      ),
      switchMap(([action, todos]) => {
        if (!todos.length) {
          return this.http
            .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(
              tap((todos: ITodo[]) =>
                this.store.dispatch(TodoAction.setTodo({ payload: todos }))
              ),
              map(() => TodoAction.getTodoSuccess())
            );
        }
        return EMPTY;
      })
    )
  );
}
