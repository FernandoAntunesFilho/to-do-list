import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      // done: ['Tarefa 4', 'Tarefa 5'],
    };
  }

  async componentDidMount() { this.tastksList(); }

  tastksList() {
    const { todo } = this.state;
    if (todo) {
      todo.forEach((task) => {
        const todoList = document.querySelector('.todo-list');
        const p = document.createElement('p');
        p.innerText = task;
        todoList.appendChild(p);
      });
    }
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
