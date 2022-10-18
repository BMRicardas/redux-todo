import { v4 as uuidv4 } from 'uuid';

import { Filter } from 'reducers/todo';

import { actions } from './actionTypes';

export const addTodo = (text: string) => ({
  type: actions.ADD_TODO,
  payload: {
    id: uuidv4(),
    text,
    done: false,
  },
});

export const toggleTodo = (id: number) => ({
  type: actions.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id: number) => ({
  type: actions.REMOVE_TODO,
  payload: {
    id,
  },
});

export const setFilter = (filter: Filter) => ({
  type: actions.SET_FILTER,
  payload: filter,
});

export const removeAll = () => ({
  type: actions.REMOVE_ALL,
});
