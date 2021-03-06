import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends React.Component {
  render() {
    const { removeTask, deleteTask } = this.props;
    const { todo } = this.props || [];
    return (
      <div className="todo-container">
        <h3>A fazer</h3>
        <div>
          { todo.map((task) => ([
            <div key={`${task}-container`} className="task-container">
              <div key={`${task}-a`} className="part-a">
                <input onClick={(e) => removeTask(e.target.value)} key={task} type="checkbox" name={task} value={task} />
                <label className="task-label" key={`${task}-label`} htmlFor={task}>{task}</label>
              </div>
              <div key={`${task}-b`} className="part-b">
                <button key={`${task}-button`} onClick={() => deleteTask(task, 'todo')} type="button">x</button>
                <br key={`${task}-br`} />
              </div>
            </div>,
          ])) }
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  removeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Todo;
