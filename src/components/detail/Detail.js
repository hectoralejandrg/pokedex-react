import { useEffect, useState } from "react";
import { getPokemon } from "../../services/Pokeapi";
import "./Detail.css";

const Detail = () => {
  const [moves, setMoves] = useState([]);
  const [height, setHeight] = useState("");
  const [order, setOrder] = useState(0);
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [type, setType] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    getPokemon("https://pokeapi.co/api/v2/pokemon/27").then((res) => {
      console.log(res.data);
      setMoves(res.data.moves);
      setHeight(res.data.height);
      setOrder(res.data.order);
      setWeight(res.data.weight);
      setName(res.data.name);
      setSprite(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types);
      setAbilities(res.data.abilities);
    });
  }, []);

  const listTypes = type.map((element) => {
    return (
      <span class="badge rounded-pill bg-danger me-2">{element.type.name}</span>
    );
  });
  const listAbilities = abilities.map((element) => {
    return (
      <span class="badge bg-warning text-dark m-2">{element.ability.name}</span>
    );
  });
  return (
    <div className="card w-75 p-3">
      <div className="row">

        <div className="col">
          <div className="row">
            <div className="col-3">
              <div className="d-flex flex-column align-items-center">
                <span class="badge bg-warning text-dark">Height</span>
                <p className="display-6">{height}</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span class="badge bg-warning text-dark">Weight</span>
                <p className="display-6">{weight}</p>
              </div>
            </div>
            <div className="col-9">
              <div className="card ps-3 pt-2 pb-2">
                <h5>Abilities</h5>
                <div className="col d-flex flex-wrap">{listAbilities}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col text-center">
          <img src={sprite} alt={name} />
        </div>

        <div className="col">
          <div>
            <span className="display-3">#{order}</span>
            <h2>{name}</h2>
            {listTypes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
