import { useDispatch } from 'react-redux';

import { removeTodo, toggleTodo } from 'features/todo/actionCreators';

import './TodoItem.scss';

interface Props {
  id: number;
  text: string;
  done: boolean;
}

export const TodoItem = ({ id, text, done }: Props) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className="todo-item">
      <div className="label">
        <input
          id={id.toString()}
          type="checkbox"
          checked={done}
          onChange={handleCheck}
        />
        <label htmlFor={id.toString()} className={done ? 'done' : ''}>
          {text}
        </label>
      </div>
      <button onClick={handleRemove} type="button" className="button">
        X
      </button>
    </li>
  );
};
