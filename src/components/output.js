import React from 'react';

function Output(props) {
  return (
    <div>
      <p>
        Population for {props.country} in {props.year}
      </p>
    </div>
  );
}

export default Output;
