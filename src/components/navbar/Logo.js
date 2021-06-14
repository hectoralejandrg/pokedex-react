import React from "react";
import imgPokedex from "../../img/pokedex.svg";

const Logo = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <img src={imgPokedex} alt="logo" height="150" width="350" />
    </div>
  );
};

export default Logo;
