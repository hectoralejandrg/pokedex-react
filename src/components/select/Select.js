import React, { useEffect, useState } from "react";
import { getAllTypes } from "../../services/Pokeapi";
import "./Select.css";

const Select = ({ handleSelect }) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    getAllTypes().then((res) => {
      setValues(res.data.results);
    });
  }, []);

  const listValues = values.map((element) => {
    return (
      <option key={element.name} value={element.url}>
        {element.name}
      </option>
    );
  });
  return (
    <div>
      <select
        className="select"
        onChange={(e) => handleSelect(e.target.value)}
      >
        {listValues}
      </select>
    </div>
  );
};

export default Select;
