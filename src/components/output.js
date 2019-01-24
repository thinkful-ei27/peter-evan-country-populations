import React from 'react';

function Output(props) {
  // const countryData = props.country.map((country, i) => (

  // ));

  return (
    <div>
      <p>
        Population for {props.country} in {props.year} was {props.population}
      </p>
    </div>
  );
}

export default Output;
