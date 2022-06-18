import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo.reducers'
import { IAppState } from '../../core/model/app-state';

export interface EntityState {
  todo: IAppState;
}

export const reducers: ActionReducerMap<EntityState> = {
  todo: fromTodo.reducer
}
