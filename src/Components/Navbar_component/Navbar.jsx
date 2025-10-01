import React from "react";
import "./Navbar.css";
import ListItem from "./ListItem_component/ListItem";
const Navbar = () => {
  return (
    <div className="Navbar">
      <ListItem />
      <div className="nav_connect">Connect with me</div>
    </div>
  );
};
export default Navbar;
