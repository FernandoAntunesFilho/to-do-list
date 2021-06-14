import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    const { todo } = this.props || [];
    return (
      <div>
        <h3>A fazer</h3>
        <div className="todo-list">
          { todo.map((task) => ([
            <input type="checkbox" name={task} value={task} />,
            <label htmlFor={task}>{task}</label>,
            <br />,
          ])) }
        </div>
      </div>
    );
  }
}

export default Todo;
