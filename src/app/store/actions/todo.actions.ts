
import { createAction, props } from '@ngrx/store';

import { ITodo } from './../../core/model/todo';

export const incrementCounter = createAction('[App] Counter increase');
export const decrementCounter = createAction('[App] Counter decrease');
export const addCounter = createAction('[App] Counter input', props<{payload: number}>());

export const getTodo = createAction('[Todo] Loading Todos');
export const getTodoSuccess = createAction('[Todo] [Success] Todos loading');
export const setTodo = createAction('[Todo] Define Todos', props<{payload:ITodo[]}>());
