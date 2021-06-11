import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class NewTaskBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Nova tarefa" />
        <button type="button">Adicionar</button>
      </div>
    );
  }
}

export default NewTaskBar;
