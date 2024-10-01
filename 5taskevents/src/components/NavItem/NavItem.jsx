import React from "react";

const NavItem = (props) => {
  const { menuItem } = props;
  const Click = (FFF) => {
    alert(FFF);
  };
  return (
    <ul>
      <li onClick={() => Click(menuItem)}>меню навигации</li>
    </ul>
  );
};
export default NavItem;
