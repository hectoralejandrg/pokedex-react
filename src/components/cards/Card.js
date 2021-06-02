import React, { useEffect, useState } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getPokemon } from "../../services/Pokeapi";
import Bar from "./Bar";
import "./Card.css";

const Card = ({ url }) => {
  const [id, setId] = useState(0);
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
        setId(res.data.id);
        setName(res.data.name);
        setSprite(res.data.sprites.other.dream_world.front_default);
        setTypes(res.data.types);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefense(res.data.stats[2].base_stat);
        setSpeed(res.data.stats[5].base_stat);
      });
    }
  }, [url]);

  const listTypes = types.map((element, index) => {
    return (
      <span key={index} className="badge rounded-pill bg-danger me-2">
        {element.type.name}
      </span>
    );
  });
  return (
    <div className="card col margin-card hover">
      <div className="card-body text-center">
        <h4>{name.toUpperCase()}</h4>
        <img
          src={sprite}
          alt={name}
          height="250"
          width="250"
          className="img-card rounded mx-auto d-block"
        />
        <div>{listTypes}</div>

        <div>
          <Bar name="HP" value={hp} />
          <Bar name="Att" value={attack} />
          <Bar name="Def" value={defense} />
          <Bar name="Spe" value={speed} />
        </div>
        <div>
          <Link to={`/pokedex/pokemon/${id}`}>
            <FontAwesomeIcon icon={faLink} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
