import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    const { removeTask } = this.props;
    const { todo } = this.props || [];
    return (
      <div>
        <h3>A fazer</h3>
        <div>
          { todo.map((task) => ([
            <input onClick={(e) => removeTask(e.target.value)} key={task} type="checkbox" name={task} value={task} />,
            <label key={`${task}-label`} htmlFor={task}>{task}</label>,
            <br key={`${task}-br`} />,
          ])) }
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  removeTask: PropTypes.func.isRequired,
};

export default Todo;
