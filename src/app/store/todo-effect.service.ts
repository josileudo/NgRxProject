import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  loadingTodo,
  successTodoLoading,
  IAppState,
  setTodo,
} from './app.state';
import { ITodo } from '../core/model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectService {
  constructor(
    private http: HttpClient,
    private action$: Actions,
    private store: Store<{ app: IAppState }>
  ) {}

  loadTodo = createEffect(() =>
    this.action$.pipe(
      ofType(loadingTodo),
      withLatestFrom(
        this.store.select('app').pipe(map((app: IAppState) => app.todos))
      ),
      switchMap(([action, todos]) => {
        if (!todos.length) {
          return this.http
            .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(
              tap((todos: ITodo[]) =>
                this.store.dispatch(setTodo({ payload: todos }))
              ),
              map(() => successTodoLoading())
            );
        }
        return EMPTY;
      })
    )
  );
}
