import React from 'react';

export default function Input (props)  {

    return (
      <form className="App">
        <input
          type="text"
          placeholder={props.placeholder}
        ></input>
      </form>
    );
}