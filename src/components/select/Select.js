import React, { useEffect, useState } from "react";
import { getAllTypes } from "../../services/Pokeapi";

const Select = ({ handleSelect }) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    getAllTypes().then((res) => {
      console.log(res.data.results);
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
        className="form-select form-select-lg"
        onChange={(e) => handleSelect(e.target.value)}
      >
        {listValues}
      </select>
    </div>
  );
};

export default Select;
