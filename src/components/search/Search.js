import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Search.css"

const Search = ({handleSearch}) => {
  const [pokemonSerch, setPokemonSerch] = useState("")
  return (
    <div className="search">
      <input className="input-search" type="search" placeholder="Search pokemon" onChange={(e)=> setPokemonSerch(e.target.value.toLowerCase())}/>
      <button className="btn" onClick={()=>handleSearch(pokemonSerch)}><FontAwesomeIcon size="2x" icon={faSearchengin} /></button>
    </div>
  );
};

export default Search;
