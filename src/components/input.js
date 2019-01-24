import React from 'react';
import Button from './button';

function Input(props) {
  return (
    <form onSubmit={(e) => e.preventDefault()}className="App">
      <input name={props.name} onChange={e => props.handleInput(e)} type="text" placeholder={props.placeholder} />
      <Button />
    </form>
  );
}

export default Input;
