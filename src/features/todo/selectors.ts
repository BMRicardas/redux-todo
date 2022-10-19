import { AppState } from 'index';

export const selectTodos = (state: AppState) => state.todo.todos;

export const selectFilter = (state: AppState) => state.todo.filter;

export const selectFilteredTodos = (state: AppState) => {
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
