import { useSelector } from 'react-redux';

import { selectFilteredTodos } from 'features/todo/selectors';
import { Todo } from 'features/todo/reducers';

import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

export const TodoList = () => {
  const todos: Todo[] = useSelector(selectFilteredTodos);

  const renderedList = todos.map((todo) => (
    <li key={todo.id}>
      <TodoItem id={todo.id} text={todo.text} done={todo.done} />
    </li>
  ));

  return <ul className="todo-list">{renderedList}</ul>;
};
