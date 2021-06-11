import React from 'react';
import Header from '../components/Header';
import NewTaskBar from '../components/NewTaskBar';
import Todo from '../components/Todo';
import Done from '../components/Done';

// eslint-disable-next-line react/prefer-stateless-function
class TodoApp extends React.Component {
  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem('todo'));
    const done = JSON.parse(localStorage.getItem('done'));

    if (!todo) localStorage.setItem('todo', JSON.stringify([]));
    if (!done) localStorage.setItem('done', JSON.stringify([]));
  }

  render() {
    return (
      <div>
        <Header />
        <NewTaskBar />
        <Todo />
        <Done />
      </div>
    );
  }
}

export default TodoApp;
