import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      <NavLink to="/" style={navLinkStyles} end>
        Home
      </NavLink>
      <NavLink to="about" style={navLinkStyles}>
        About
      </NavLink>
      {/* it set by default which class is active. Use active class or isActive to style active links. */}
    </nav>
  );
};

export default Navbar;
