import { faPersonDressBurst } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">
        <h4>
          <FontAwesomeIcon className="me-2" icon={faPersonDressBurst} />
          Dress Collection
        </h4>
      </div>
      <div className="navbar-main">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/reviews">
          Reviews
        </Link>
        <Link className="navbar-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="navbar-link" to="/login">
          Login
        </Link>
        <Link className="navbar-link" to="/blogs">
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default navbar;
