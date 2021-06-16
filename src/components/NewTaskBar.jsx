import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class NewTaskBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefa: '',
    };
  }

  handleChange(value) {
    this.setState({ tarefa: value });
  }

  saveTask() {
    const { tarefa } = this.state;
    const { receiveNewTask, checkTaskIsUnic } = this.props;
    if (!checkTaskIsUnic(tarefa)) {
      receiveNewTask(tarefa);
      this.setState({ tarefa: '' });
    } else {
      alert(`Tarefa "${tarefa} já existe"`);
    }
  }

  render() {
    const { tarefa } = this.state;
    return (
      <div className="taskbar-container">
        <input onChange={(e) => this.handleChange(e.target.value)} value={tarefa} type="text" placeholder="Nova tarefa" />
        <button onClick={() => this.saveTask()} type="button">Adicionar</button>
      </div>
    );
  }
}

NewTaskBar.propTypes = {
  receiveNewTask: PropTypes.func.isRequired,
  checkTaskIsUnic: PropTypes.func.isRequired,
};

export default NewTaskBar;
