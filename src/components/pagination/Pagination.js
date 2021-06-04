import React, { useEffect, useState } from "react";

const Pagination = ({ urls, handlePage }) => {
  const [url, setUrl] = useState([]);
  const [pag, setPag] = useState([]);
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  useEffect(() => {
    if (urls) {
      const arr = [];
      let flat = true;
      let j = 0;
      let i = 4;
      while (flat) {
        if (i > urls.length - 1) {
          flat = false;
          i = urls.length - 1;
        }
        if (i !== j) {
          arr.push(urls.slice(j, i));
        }
        j = j + 4;
        i = i + 4;
      }
      setUrl(arr);
      setPag(arr.slice(start, end));
    }
  }, [urls, end ,start]);

  const listPag = pag.map((element, index) => {
    return (
      <button
        key={index}
        onClick={() => handlePage(element)}
        type="button"
        className="btn btn-primary"
      >
        {(index+start) + 1}
      </button>
    );
  });

  const handleNext = () => {
    if(end < url.length){
      setStart(start+1)
      setEnd(end+1)
    }
    setPag(url.slice(start, end))
  };

  const handlePrevius = () => {
    if(start > 0){
      setStart(start-1)
      setEnd(end-1)
    }
    setPag(url.slice(start, end))
  };

  return (
    <div className="btn-toolbar mt-3" role="toolbar">
      <div className="btn-group me-2" role="group">
        {start?<button onClick={()=>handlePrevius()} type="button" className="btn btn-primary">
          {"<<"}
        </button>: null}
        {listPag}
        {end!==(url.length-1)?<button onClick={()=>handleNext()} type="button" className="btn btn-primary">
          {">>"}
        </button>:null}
      </div>
    </div>
  );
};

export default Pagination;
