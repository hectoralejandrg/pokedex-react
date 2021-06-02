import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Search.css"

const Search = ({handleSearch}) => {
  const [pokemonSerch, setPokemonSerch] = useState("")
  return (
    <div className="d-flex">
      <input className="form-control" type="search" placeholder="Search pokemon" onChange={(e)=> setPokemonSerch(e.target.value.toLowerCase())} required/>
      <button className="btn btn-primary" onClick={()=> pokemonSerch? handleSearch(pokemonSerch):null}><FontAwesomeIcon size="2x" icon={faSearchengin} /></button>
    </div>
  );
};

export default Search;
