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
      done: [],
    };

    this.receiveNewTask = this.receiveNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addDoneTask = this.addDoneTask.bind(this);
  }

  addDoneTask(task) {
    const { done } = this.state;
    done.push(task);
    this.setState({ done });
  }

  receiveNewTask(task) {
    const { todo } = this.state;
    todo.push(task);
    this.setState({ todo });
  }

  removeTask(task) {
    const { todo } = this.state;
    const index = todo.indexOf(task);
    if (index > -1) {
      todo.splice(index, 1);
    }
    this.setState({ todo });

    this.addDoneTask(task);
  }

  render() {
    const { todo, done } = this.state;
    return (
      <div>
        <Header />
        <NewTaskBar receiveNewTask={this.receiveNewTask} />
        <Todo todo={todo} removeTask={this.removeTask} />
        <Done done={done} />
      </div>
    );
  }
}

export default TodoApp;
