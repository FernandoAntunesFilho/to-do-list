import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Done extends React.Component {
  render() {
    const { uncheckDoneTask, deleteTask } = this.props;
    const { done } = this.props || [];
    return (
      <div>
        <h3>Feito</h3>
        <div>
          { done.map((task) => ([
            <input onClick={(e) => uncheckDoneTask(e.target.value)} defaultChecked="true" key={task} type="checkbox" name={task} value={task} />,
            <label key={`${task}-label`} htmlFor={task}>{task}</label>,
            <button key={`${task}-button`} onClick={() => deleteTask(task, 'done')} type="button">x</button>,
            <br key={`${task}-br`} />,
          ])) }
        </div>
      </div>
    );
  }
}

Done.propTypes = {
  uncheckDoneTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Done;
