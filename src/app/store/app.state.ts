import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
}

export const incrementCounter = createAction('[App] Counter increase');
export const decrementCounter = createAction('[App] Counter decrease');
export const inputCounter = createAction('[App] Counter input', props<{payload: number}>());

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
  })
);

