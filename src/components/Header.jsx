import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/userDetails">User Details</Link>
    </nav>
  );
};

export default Header;
