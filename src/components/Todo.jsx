import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    return (
      <div>
        <h3>A fazer</h3>
        <ul>
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
        </ul>
      </div>
    );
  }
}

export default Todo;
