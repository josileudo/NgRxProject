import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { IAppState } from './core/model/app-state';
import { addCounter, decrementCounter, incrementCounter } from './store/actions/todo.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor (private store: Store<{app: IAppState}>) {}

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

    this.store.dispatch(addCounter({ payload: valueTreated }));
  }
}
