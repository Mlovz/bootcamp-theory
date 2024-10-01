import React from "react";

const EventItem = (props) => {
  const { name, date } = props;
  const Click = (aaa) => {
    alert(aaa);
  };
  return (
    <ul>
      <li onClick={() => Click(name)}>название</li>
      <li onClick={() => Click(date)}>дата</li>
    </ul>
  );
};
export default EventItem;
