import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, loadingTodo } from '../../store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(
    private store: Store<{ app: IAppState }>
  ) {}

  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  ngOnInit(): void {
    this.store.dispatch(loadingTodo());
  }
}
