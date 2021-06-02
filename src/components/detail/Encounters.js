import React, { useEffect, useState } from "react";
import { getEcounters } from "../../services/Pokeapi";

const Encounters = ({ id }) => {
  const [encounters, setEncounters] = useState([]);
  useEffect(() => {
    if (id) {
      getEcounters(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`).then(
        (res) => {
          setEncounters(res.data);
        }
      );
    }
  }, [id]);

  const listEncounters = encounters.map((element, index) => {
    return (
      <h5 className="me-3" key={index}>
        <span className="badge bg-secondary me-1">
          City: {element.location_area.name.split("-")[0]}
        </span>
        <span className="badge bg-primary">
          Area:{" "}
          {element.location_area.name
            .split("-")
            .slice(1, element.location_area.name.split("-").length - 1)
            .join(" ")}
        </span>
      </h5>
    );
  });

  return (
    <div className="d-flex flex-wrap p-3">
      {listEncounters}
    </div>
  );
};
export default Encounters;
