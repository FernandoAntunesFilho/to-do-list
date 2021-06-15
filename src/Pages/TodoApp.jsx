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
    this.uncheckDoneTask = this.uncheckDoneTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
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

  uncheckDoneTask(task) {
    const { done } = this.state;
    const index = done.indexOf(task);
    if (index > -1) {
      done.splice(index, 1);
    }
    this.setState({ done });

    this.receiveNewTask(task);
  }

  deleteTask(task, type) {
    if (type === 'todo') {
      const { todo } = this.state;
      const index = todo.indexOf(task);
      if (index > -1) {
        todo.splice(index, 1);
      }
      this.setState({ todo });
    }

    if (type === 'done') {
      const { done } = this.state;
      const index = done.indexOf(task);
      if (index > -1) {
        done.splice(index, 1);
      }
      this.setState({ done });
    }
  }

  render() {
    const { todo, done } = this.state;
    return (
      <div>
        <Header />
        <NewTaskBar receiveNewTask={this.receiveNewTask} />
        <Todo todo={todo} removeTask={this.removeTask} deleteTask={this.deleteTask} />
        <Done done={done} uncheckDoneTask={this.uncheckDoneTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default TodoApp;
