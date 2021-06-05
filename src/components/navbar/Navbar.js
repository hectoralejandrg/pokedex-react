import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/pokedex" className="navbar-brand">
          <FontAwesomeIcon icon={faHome} className="text-danger"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
