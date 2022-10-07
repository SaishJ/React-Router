import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      {/* Link renders anchor element in the DOM. It accept to prop which is assign the path of configure route. */}
    </nav>
  );
};

export default Navbar;
