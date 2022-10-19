import { AppState } from 'index';

export const selectTodos = (state: AppState) => state.todo.todos;

export const selectFilter = (state: AppState) => state.todo.filter;

export const selectFilteredTodos = (state: AppState) => {
  switch (selectFilter(state)) {
    case 'pending':
      return selectTodos(state).filter((todo) => !todo.done);
    case 'completed':
      return selectTodos(state).filter((todo) => todo.done);

    default:
      return selectTodos(state);
  }
};
