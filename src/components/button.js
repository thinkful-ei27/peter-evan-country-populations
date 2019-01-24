import React from 'react';

function Button(props) {
  return (
    <button type="submit" onClick={props.log}>
      Get Population
    </button>
  );
}

export default Button;
