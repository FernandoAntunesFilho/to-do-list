import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    const { todo } = this.props || [];
    return (
      <div>
        <h3>A fazer</h3>
        <div className="todo-list">
          { todo.map((task) => <p key={task}>{ task }</p>) }
        </div>
      </div>
    );
  }
}

export default Todo;
