import { AppState } from 'index';

export const selectTodo = (state: AppState) => state.todo;

export const selectFilteredTodos = (state: AppState) => {
  switch (state.todo.filter) {
    case 'pending':
      return state.todo.todos.filter((todo) => !todo.done);
    case 'completed':
      return state.todo.todos.filter((todo) => todo.done);

    default:
      return state.todo.todos;
  }
};
