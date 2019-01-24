import React from 'react';

function Input(props) {
  return (
    <input name={props.name} onChange={e => props.handleInput(e)} type="text" placeholder={props.placeholder} />
  );
}

export default Input;
