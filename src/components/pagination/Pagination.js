import React, { useEffect, useState } from "react";

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
      <button
        key={index}
        onClick={() => handlePage(element)}
        type="button"
        className="btn btn-primary"
      >
        {index + 1}
      </button>
    );
  });

  return (
    <div
      className="btn-toolbar mt-3"
      role="toolbar"
    >
      <div className="btn-group me-2" role="group">
        {listPag}
      </div>
    </div>
  );
};

export default Pagination;
