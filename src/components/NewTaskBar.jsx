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
    console.log(this.props);
    const { tarefa } = this.state;
    const { receiveNewTask } = this.props;
    receiveNewTask(tarefa);
    this.setState({ tarefa: '' });
  }

  render() {
    const { tarefa } = this.state;
    return (
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)} value={tarefa} type="text" placeholder="Nova tarefa" />
        <button onClick={() => this.saveTask()} type="button">Adicionar</button>
      </div>
    );
  }
}

NewTaskBar.propTypes = {
  receiveNewTask: PropTypes.func.isRequired,
};

export default NewTaskBar;
