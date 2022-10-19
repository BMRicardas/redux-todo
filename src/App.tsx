import { Container } from 'components/Container/Container';
import { Form } from 'components/Form/Form';
import { Tabs } from 'components/Tabs/Tabs';
import { TodoList } from 'components/Todo/TodoList/TodoList';
import './App.scss';

export const App = () => {
  return (
    <Container>
      <h1 className="title">Todo List App</h1>
      <Form />
      <Tabs />
      <TodoList />
    </Container>
  );
};
