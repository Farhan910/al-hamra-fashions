import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';



const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">
        <h1>hello</h1>
      </div>
      <div className="navbar-main">
       <Link className="navbar-link" to="/">Home</Link>
       <Link className="navbar-link" to="/Reviews">Reviews</Link>
       <Link className="navbar-link"to="/Login">Login</Link>

      </div>
    </div>
  );
};

export default navbar;
