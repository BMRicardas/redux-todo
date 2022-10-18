import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'features/todo/actionCreators';

import './Form.scss';

export const Form = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTodoText(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoText.trim().length === 0) {
      return;
    }

    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a new todo"
        name="todo"
        value={todoText}
        onChange={handleInputChange}
        className="form-input"
      />
    </form>
  );
};
