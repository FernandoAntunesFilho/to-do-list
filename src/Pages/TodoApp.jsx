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
    const { todo } = this.state;
    todo.push(task);
    this.setState({ todo });
  }

  // componentDidMount() {
  //   const todo = JSON.parse(localStorage.getItem('todo'));
  //   const done = JSON.parse(localStorage.getItem('done'));

  //   if (!todo) localStorage.setItem('todo', JSON.stringify([]));
  //   if (!done) localStorage.setItem('done', JSON.stringify([]));
  // }

  render() {
    const { todo } = this.state;
    return (
      <div>
        <Header />
        <NewTaskBar receiveNewTask={this.receiveNewTask} />
        <Todo todo={todo} />
        <Done />
      </div>
    );
  }
}

export default TodoApp;
