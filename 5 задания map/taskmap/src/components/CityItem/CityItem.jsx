import React from "react";

const CityItem = ({ name, population }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{population}</h2>
    </div>
  );
};
export default CityItem;
