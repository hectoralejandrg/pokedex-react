import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar position-absolute top-0 start-0">
      <div className="container">
        <Link to="/pokedex" className="navbar-brand">
          <FontAwesomeIcon icon={faHome} className="text-danger"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
