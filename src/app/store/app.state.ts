import { createAction, createReducer, on, props } from "@ngrx/store";
import { ITodo } from '../core/model/todo';

export interface IAppState {
  counter: number;
  todos: ITodo[]
}

export const appInitialState: IAppState = {
  counter: 0,
  todos: []
}

export const incrementCounter = createAction('[App] Counter increase');
export const decrementCounter = createAction('[App] Counter decrease');
export const inputCounter = createAction('[App] Counter input', props<{payload: number}>());

export const loadingTodo= createAction('[App] Loading Todos');
export const successTodoLoading= createAction('[App] [Success] Todos loading')
export const setTodo= createAction('[App] Define Todos', props<{payload:ITodo[]}>());

export const appReducer = createReducer(
  appInitialState,
  on(incrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementCounter, (state: IAppState) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),
  on(inputCounter, (state: IAppState, { payload }) => {
    state = {
      ...state,
      counter: payload,
    }
    return state;
  }),
  on(setTodo, (state: IAppState,  { payload } ) => {
    state = {
      ...state,
      todos: payload
    }
    return state;
  })
);

