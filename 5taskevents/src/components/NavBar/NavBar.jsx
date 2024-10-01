import React from "react";
import NavItem from "../NavItem/NavItem";

const NavBar = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <NavItem key={index} menuItem={menuItem} />
      ))}
      <NavItem />
    </div>
  );
};
export default NavBar;
