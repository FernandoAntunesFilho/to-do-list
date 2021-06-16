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

    // PRÓXIMOS PASSOS: FAZER O CSS

    this.receiveNewTask = this.receiveNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addDoneTask = this.addDoneTask.bind(this);
    this.uncheckDoneTask = this.uncheckDoneTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.checkTaskIsUnic = this.checkTaskIsUnic.bind(this);
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('todo'))) localStorage.setItem('todo', JSON.stringify([]));
    if (!JSON.parse(localStorage.getItem('done'))) localStorage.setItem('done', JSON.stringify([]));

    const todo = JSON.parse(localStorage.getItem('todo'));
    const done = JSON.parse(localStorage.getItem('done'));

    this.setState({
      todo,
      done,
    });
  }

  checkTaskIsUnic(newTask) {
    const { todo, done } = this.state;
    const allTasks = todo.concat(done);

    return allTasks.includes(newTask);
  }

  updateLocalStorage() {
    const { todo, done } = this.state;
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('done', JSON.stringify(done));
  }

  addDoneTask(task) {
    const { done } = this.state;
    done.push(task);
    this.setState({ done });
    this.updateLocalStorage();
  }

  receiveNewTask(task) {
    const { todo } = this.state;
    todo.push(task);
    this.setState({ todo });
    this.updateLocalStorage();
  }

  removeTask(task) {
    const { todo } = this.state;
    const index = todo.indexOf(task);
    if (index > -1) {
      todo.splice(index, 1);
    }
    this.setState({ todo });
    this.updateLocalStorage();

    this.addDoneTask(task);
  }

  uncheckDoneTask(task) {
    const { done } = this.state;
    const index = done.indexOf(task);
    if (index > -1) {
      done.splice(index, 1);
    }
    this.setState({ done });
    this.updateLocalStorage();

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
      this.updateLocalStorage();
    }

    if (type === 'done') {
      const { done } = this.state;
      const index = done.indexOf(task);
      if (index > -1) {
        done.splice(index, 1);
      }
      this.setState({ done });
      this.updateLocalStorage();
    }
  }

  render() {
    const { todo, done } = this.state;
    return (
      <div>
        <Header />
        <NewTaskBar checkTaskIsUnic={this.checkTaskIsUnic} receiveNewTask={this.receiveNewTask} />
        <div className="tasks-container">
          <Todo todo={todo} removeTask={this.removeTask} deleteTask={this.deleteTask} />
          <Done done={done} uncheckDoneTask={this.uncheckDoneTask} deleteTask={this.deleteTask} />
        </div>
        <p className="credits">Desenvolvido por Fernando Antunes | 2021</p>
      </div>
    );
  }
}

export default TodoApp;
