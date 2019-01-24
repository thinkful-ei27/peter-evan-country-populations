import React from 'react';

function Input(props) {
  return (
    <form className="App">
      <input type="text" placeholder={props.placeholder} />
    </form>
  );
}

export default Input;
