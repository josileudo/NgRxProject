import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

import * as TodoAction from "../actions/todo.actions";

@Injectable()
export class TodoDispatch {
  constructor (private store: Store) {}

  getTodo(){
    this.store.dispatch(TodoAction.getTodo());
  }
}
