import React from 'react';

function Image(props) {
  return (
    <div>
      <img src={props.imgSrc} alt="flag of china" />
    </div>
  );
}

export default Image;
