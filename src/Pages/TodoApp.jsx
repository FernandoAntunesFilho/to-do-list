import React from 'react';
import Header from '../components/Header';
import NewTaskBar from '../components/NewTaskBar';
import Todo from '../components/Todo';
import Done from '../components/Done';

// eslint-disable-next-line react/prefer-stateless-function
class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      // done: [],
    };

    this.receiveNewTask = this.receiveNewTask.bind(this);
  }

  receiveNewTask(task) {
    console.log(task);
    const { todo } = this.state;
    todo.push(task);
    this.setState({ todo: task });
  }

  // componentDidMount() {
  //   const todo = JSON.parse(localStorage.getItem('todo'));
  //   const done = JSON.parse(localStorage.getItem('done'));

  //   if (!todo) localStorage.setItem('todo', JSON.stringify([]));
  //   if (!done) localStorage.setItem('done', JSON.stringify([]));
  // }

  render() {
    return (
      <div>
        <Header />
        <NewTaskBar />
        <Todo receiveNewTask={() => this.receiveNewTask()} />
        <Done />
      </div>
    );
  }
}

export default TodoApp;
