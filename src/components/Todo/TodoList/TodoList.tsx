import { useSelector } from 'react-redux';

import { selectTodo } from 'features/todo/selectors';

import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

export const TodoList = () => {
  const { todos, filter } = useSelector(selectTodo);

  const all = todos.map((todo) => (
    <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
  ));

  const pending = todos
    .filter((todo) => !todo.done)
    .map((todo) => (
      <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
    ));

  const completed = todos
    .filter((todo) => todo.done)
    .map((todo) => (
      <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
    ));

  return (
    <ul className="todo-list">
      {filter === 'all' && all}
      {filter === 'pending' && pending}
      {filter === 'completed' && completed}
    </ul>
  );
};
