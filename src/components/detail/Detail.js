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

  useEffect(() => {
    getPokemon("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
      console.log(res.data);
      setMoves(res.data.moves);
      setHeight(res.data.height);
      setOrder(res.data.order);
      setWeight(res.data.weight);
      setName(res.data.name);
      setSprite(res.data.sprites.front_default);
      setType(res.data.types);
    });
  }, []);

  const listTypes = type.map((element) => {
    return <span>{element.type.name}</span>;
  });
  return (
    <div className="card">
      <span className="">
        <span>{height}</span>
        <span>Height</span>
      </span>
      <span className="">
        <span>{weight}</span>
        <span>Weight</span>
      </span>
      <div>
        <img src={sprite} alt={name} />
      </div>
      <div>
        <span className="">#{order}</span>
        <h2>{name}</h2>
        <span>{listTypes}</span>
      </div>
    </div>
  );
};

export default Detail;
