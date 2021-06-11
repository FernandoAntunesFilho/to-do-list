import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'],
      // done: ['Tarefa 4', 'Tarefa 5'],
    };
  }

  componentDidMount() {
    this.tastksList();
  }

  tastksList() {
    const { todo } = this.state;
    todo.forEach((task) => {
      const todoList = document.querySelector('.todo-list');
      const p = document.createElement('p');
      p.innerText = task;
      todoList.appendChild(p);
    });
  }

  render() {
    return (
      <div>
        <h3>A fazer</h3>
        <div className="todo-list" />
      </div>
    );
  }
}

export default Todo;
