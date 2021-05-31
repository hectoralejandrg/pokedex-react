import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({ urls, handlePage }) => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    if (urls) {
      const arr = [];
      const leng = urls.length;
      let i = 0;
      let j = 4;
      let flat = true;
      do {
        if (flat) {
          arr.push(urls.slice(i, j));
        } else {
          arr.push(urls.slice(i, leng));
        }
        if (j > leng) {
          flat = false;
        }
        i = i + 4;
        j = j + 4;
      } while (j < leng || flat);
      setUrl(arr);
    }
  }, [urls]);

  const listPag = url.map((element, index) => {
    return (
      <li className="pageNumber" key={index}>
        <a href="#" onClick={()=>handlePage(element)}>{index + 1}</a>
      </li>
    );
  });

  return (
    <div>
      <ul>{listPag}</ul>
    </div>
  );
};

export default Pagination;
