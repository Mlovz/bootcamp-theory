import React from "react";
import CityItem from "../CityItem/CityItem";

const CityList = ({ cities }) => {
  return (
    <div>
      {cities.map((city, i) => (
        <CityItem name={city.name} population={city.population} />
      ))}
    </div>
  );
};
export default CityList;
