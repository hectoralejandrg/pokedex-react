import { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { getPokemon } from "../../services/Pokeapi";
import Encounters from "./Encounters";

const Detail = () => {
  let { id } = useParams();
  const { path } = useRouteMatch();
  const [moves, setMoves] = useState([]);
  const [height, setHeight] = useState("");
  const [order, setOrder] = useState(0);
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [type, setType] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    if (id) {
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        setMoves(res.data.moves);
        setHeight(res.data.height);
        setOrder(res.data.order);
        setWeight(res.data.weight);
        setName(res.data.name);
        setSprite(
          res.data.sprites.other.dream_world.front_default ||
            res.data.sprites.other["official-artwork"].front_default ||
            res.data.sprites.front_default
        );
        setType(res.data.types);
        setAbilities(res.data.abilities);
      });
    }
  }, [id]);

  const listMoves = moves.map((element, index) => {
    return (
      <span key={index} className="badge rounded-pill bg-success me-2">
        {element.move.name}
      </span>
    );
  });
  const listTypes = type.map((element, index) => {
    return (
      <span key={index} className="badge rounded-pill bg-danger me-2">
        {element.type.name}
      </span>
    );
  });
  const listAbilities = abilities.map((element, index) => {
    return (
      <span key={index} className="badge bg-warning text-dark m-2">
        {element.ability.name}
      </span>
    );
  });
  return (
    <Switch>
      <Route path={`${path}/:id/encounter`} children={<Encounters />} />
      <Route path={path}>
        <div className="container">
          <div className="card p-3">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-warning text-dark">Height</span>
                      <p className="display-6">{height}</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-warning text-dark">Weight</span>
                      <p className="display-6">{weight}</p>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="card ps-3 pt-2 pb-2">
                      <h5>Abilities</h5>
                      <div className="col d-flex flex-wrap">
                        {listAbilities}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col text-center">
                <img src={sprite} alt={name} height="350" width="350" />
              </div>

              <div className="col">
                <div>
                  <span className="display-3">#{order}</span>
                  <h2>{name}</h2>
                  {listTypes}
                </div>
              </div>
            </div>
            <div>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Moves
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Encounters
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="p-3">{listMoves}</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <Encounters />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Detail;
