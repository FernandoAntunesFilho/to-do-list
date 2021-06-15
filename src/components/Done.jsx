import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Done extends React.Component {
  render() {
    const { done } = this.props || [];
    return (
      <div>
        <h3>Feito</h3>
        <div>
          { done.map((task) => ([
            <input checked="true" key={task} type="checkbox" name={task} value={task} />,
            <label key={`${task}-label`} htmlFor={task}>{task}</label>,
            <br key={`${task}-br`} />,
          ])) }
        </div>
      </div>
    );
  }
}

export default Done;
