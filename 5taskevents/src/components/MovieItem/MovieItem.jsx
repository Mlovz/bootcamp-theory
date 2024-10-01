import React from "react";

const MovieItem = (props) => {
  const { title, year } = props;
  const Click = (FFF) => {
    alert(FFF);
  };
  return (
    <ul>
      <li onClick={() => Click(title)}>фильм</li>
      <li onClick={() => Click(year)}>год</li>
    </ul>
  );
};

export default MovieItem;
