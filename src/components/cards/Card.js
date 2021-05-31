import React, { useEffect, useState } from "react";
import { getPokemon } from "../../services/Pokeapi";
import "./Card.css";

const Card = ({ url }) => {
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState([]);
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");

  useEffect(() => {
    if (url) {
      getPokemon(url).then((res) => {
        setName(res.data.name);
        setSprite(res.data.sprites.front_default);
        setTypes(res.data.types);
        setHp(res.data.stats[0].base_stat)
        setAttack(res.data.stats[1].base_stat)
        setDefense(res.data.stats[2].base_stat)
        setSpeed(res.data.stats[5].base_stat)
      });
    }
  }, [url]);

  const listTypes = types.map((element, index) => {
    return <span key={index}>{element.type.name}</span>;
  });
  return (
    <div className="card photo">
      <div className="card-header">
        <h4>{name.toUpperCase()}</h4>
        <hr />
      </div>
      <div className="card-body">
        <img src={sprite} alt="" />
        <div>{listTypes}</div>

        <div>
          <div>
            <span>HP: </span>
            <span>{hp}</span>
          </div>
          <div>
            <span>Att: </span>
            <span>{attack}</span>
          </div>
          <div>
            <span>Def: </span>
            <span>{defense}</span>
          </div>
          <div>
            <span>Spe: </span>
            <span>{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
