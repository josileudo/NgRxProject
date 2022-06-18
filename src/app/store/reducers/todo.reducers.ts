import { Action, createReducer, on } from "@ngrx/store";
import * as TodoActions from '../actions/todo.actions'
import { IAppState } from '../../core/model/app-state';

export const appInitialState: IAppState = {
  counter: 0,
  todos: []
}

export const todoReducer = createReducer(
  appInitialState,
  on(TodoActions.incrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(TodoActions.decrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),
  on(TodoActions.addCounter, (state: IAppState, { payload }) => {
    state = {
      ...state,
      counter: payload,
    }
    return state;
  }),
  on(TodoActions.setTodo, (state: IAppState,  { payload } ) => {
    state = {
      ...state,
      todos: payload
    }
    return state;
  })
);

export function reducer(state: IAppState | undefined, action: Action) {
  return todoReducer(state, action);
}

