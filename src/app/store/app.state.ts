import { createReducer, on } from "@ngrx/store";
import { IAppState } from '../core/model/app-state';
import * as todoActions from './actions/todo.actions'

export const appInitialState: IAppState = {
  counter: 0,
  todos: []
}

export const appReducer = createReducer(
  appInitialState,
  on(todoActions.incrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(todoActions.decrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),
  on(todoActions.addCounter, (state: IAppState, { payload }) => {
    state = {
      ...state,
      counter: payload,
    }
    return state;
  }),
  on(todoActions.setTodo, (state: IAppState,  { payload } ) => {
    state = {
      ...state,
      todos: payload
    }
    return state;
  })
);

