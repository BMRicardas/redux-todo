import { useSelector } from 'react-redux';

import { selectFilteredTodos } from 'features/todo/selectors';

import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  const renderedList = todos.map((todo: any) => (
    <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
  ));

  return <ul className="todo-list">{renderedList}</ul>;
};
