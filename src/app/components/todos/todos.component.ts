import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadTodo } from 'src/app/store/actions/todo.actions';
import { IAppState } from '../../core/model/app-state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor( private store: Store<{ app: IAppState }> ) {}

  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  ngOnInit(): void {
    this.store.dispatch(loadTodo());
  }
}
