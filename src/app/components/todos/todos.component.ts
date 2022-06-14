import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAppState, setTodo } from '../../store/app.state';
import { map } from 'rxjs';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  ngOnInit(): void {
    this.todos$.subscribe({
      next: (todos) => {
        if (!todos.length) {
          this.http
            .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            .subscribe({
              next: (response: ITodo[]) => {
                this.store.dispatch(setTodo({ payload: response }));
              },
            });
        }
      },
    });
  }
}
