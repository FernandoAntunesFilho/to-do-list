import React from 'react';
import Header from '../components/Header';
import NewTaskBar from '../components/NewTaskBar';
import Todo from '../components/Todo';

// eslint-disable-next-line react/prefer-stateless-function
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewTaskBar />
        <Todo />
      </div>
    );
  }
}

export default TodoApp;
