import React from 'react';
import Header from '../components/Header';
import NewTaskBar from '../components/NewTaskBar';

// eslint-disable-next-line react/prefer-stateless-function
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewTaskBar />
      </div>
    );
  }
}

export default TodoApp;
