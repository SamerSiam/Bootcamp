import React from "react";

const DisplayResults = ({item}) => {
  return (
    <ul>
      {item.map((country, i) => (
        <li key={i}>{country.name}</li>
      ))}
    </ul>
  );
};

export default DisplayResults;