import React, { useEffect, useState } from "react";
import { getTypes } from "../../services/Pokeapi";
import Card from "../cards/Card";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import Select from "../select/Select";
import "./Container.css";

const Container = () => {
  const [urls, setUrls] = useState([]);
  const [pag, setPag] = useState([]);
  const [typeUrl, setTypeUrl] = useState("https://pokeapi.co/api/v2/type/1");
  const [viewPagination, setViewPagination] = useState(true);

  /**Peticion de los tipos de pokemon */
  useEffect(() => {
    if (typeUrl) {
      getTypes(typeUrl).then((res) => {
        setUrls(res.data.pokemon);
        setPag(res.data.pokemon.slice(0, 4));
      });
    }
  }, [typeUrl]);

  /**Lista que presenta las Cards con cada pokemon */
  const list = pag.map((element) => {
    return <Card url={element.pokemon.url} key={element.pokemon.name} />;
  });

  /**Manejador de la Paginacion */
  const handle = (arr) => {
    setPag(arr);
  };

  /**Manejador del Select */
  const handleSelect = (url) => {
    setViewPagination(true);
    setTypeUrl(url);
  };

  /**Manejador de la barra de busqueda */
  const handleSearch = (pokemonSerch) => {
    console.log(pokemonSerch);
    setViewPagination(false);
    setPag([
      { pokemon: { url: `https://pokeapi.co/api/v2/pokemon/${pokemonSerch}` } },
    ]);
  };

  return (
    <div className="container">
      <div className="row justify-content-between m-3">
        <div className="col-3">
          <Search handleSearch={handleSearch} />
        </div>
        <div className="col-3">
          <Select handleSelect={handleSelect} />
        </div>
      </div>
      <div className="row">{list}</div>
      <div className="row">
        {viewPagination ? <Pagination urls={urls} handlePage={handle} /> : null}
      </div>
    </div>
  );
};

export default Container;
