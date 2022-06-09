import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState, incrementCounter, decrementCounter, inputCounter } from './store/app.state';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  todos: ITodo[] = [];

  constructor (
    private store: Store<{app: IAppState}>,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (response: ITodo[]) => this.todos = response
      })
  }

  counter$ = this.store
    .select('app')
    .pipe(
      map((e: IAppState) => e.counter)
    );

  decrementCounter() {
    this.store.dispatch(decrementCounter());
  }

  incrementCounter() {
    this.store.dispatch(incrementCounter());
  }

  inputCounter(value: string) {
    const valueTreated = parseFloat(value);

    this.store.dispatch(inputCounter({ payload: valueTreated }));
  }
}
