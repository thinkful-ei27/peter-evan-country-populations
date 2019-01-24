import React from 'react';

function Output(props) {
  const countryData = props.country.map(country => 
    <p>
      Population for {country.country.value} in {country.date}
    </p>
  );

  return (
    <div>
      {countryData}
    </div>
  );
}

export default Output;
