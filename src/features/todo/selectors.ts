import { AppState } from 'index';

import { Filter, Todo } from './reducers';

export const selectTodos = (state: AppState): Todo[] => state.todo.todos;

export const selectFilter = (state: AppState): Filter => state.todo.filter;

export const selectFilteredTodos = (state: AppState): Todo[] => {
  const filter = selectFilter(state);
  const todos = selectTodos(state);

  switch (filter) {
    case 'pending':
      return todos.filter((todo) => !todo.done);
    case 'completed':
      return todos.filter((todo) => todo.done);

    default:
      return todos;
  }
};
