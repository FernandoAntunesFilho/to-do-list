import React from 'react';

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
    const tasks = JSON.parse(localStorage.getItem('todo'));
    tasks.push(tarefa);
    localStorage.setItem('todo', JSON.stringify(tasks));
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

export default NewTaskBar;
