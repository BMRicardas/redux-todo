import { useSelector } from 'react-redux';

import { selectFilteredTodos } from 'features/todo/selectors';
import { Todo } from 'features/todo/reducers';

import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

export const TodoList = () => {
  const todos: Todo[] = useSelector(selectFilteredTodos);

  const renderedList = todos.map((todo) => (
    <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
  ));

  return <ul className="todo-list">{renderedList}</ul>;
};
