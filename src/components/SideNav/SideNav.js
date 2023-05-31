import "./SideNav.css";
import { sideNavItems } from "./SideNav.config";
import React from "react";

function SideNav() {
  const [selectedItem, setSelectedItem] = React.useState("Home");
  console.log(selectedItem);
  return (
    <nav className="sidenav">
      {sideNavItems.map((navItem) => (
        <a
          href=""
          className={
            selectedItem === navItem.label ? "nav-item active" : "nav-item"
          }
          onClick={(ev) => {
            ev.preventDefault();
            setSelectedItem(navItem.label);
          }}
          key={navItem.label}
        >
          <img src={`./assets/svgs/${navItem.icon}`} alt={navItem.label} />
          {navItem.label}
        </a>
      ))}
    </nav>
  );
}

export default SideNav;
