import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    const { todo } = this.props || [];
    return (
      <div>
        <h3>A fazer</h3>
        <div className="todo-list">
          {/* { todo.map((task) => <p key={task}>{ task }</p>) } */}
          { todo.map((task) => ([<p>{task}</p>, <h1>{task}</h1>])) }

          {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1"> I have a bike</label><br></br> */}
        </div>
      </div>
    );
  }
}

export default Todo;
