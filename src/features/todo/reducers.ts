import { actions } from 'features/todo/actionTypes';

export type Filter = 'all' | 'pending' | 'completed';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: Filter;
}

interface Action {
  type: string;
  payload: Todo;
}

const initialState: TodosState = { todos: [], filter: 'all' };

export const todoReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: Action
): TodosState => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };

    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case actions.SET_FILTER:
      return {
        ...state,
        // @ts-ignore
        filter: action.payload,
      };

    case actions.REMOVE_ALL:
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
};
