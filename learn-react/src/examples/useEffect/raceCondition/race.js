import React, { useEffect, useState } from "react";
function FetchComponent(props) {
  const [data, setData] = useState(null);
  const [fetchedId, setFetchedId] = useState(null);

  useEffect(() => {
    // let active = true;
    const abortSignal = new AbortController();
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await fetch(
          `https://swapi.dev/api/people/${props.id}/`,
          { signal: abortSignal.signal }
        );
        const newData = await response.json();

        setFetchedId(props.id);
        setData(newData);

        // if (active) {
        //   setFetchedId(props.id);
        //   setData(newData);
        // }
      }, Math.round(Math.random() * 5000));
    };

    fetchData();

    // return () => {
    //   active = false;
    // };

    return () => {
      abortSignal.abort();
    };
  }, [props.id]);

  if (data) {
    return (
      <div>
        <p>Now data is requested for id {props.id}.</p>
        <p style={{ color: fetchedId === props.id ? "green" : "red" }}>
          But displaying Data for id: {fetchedId}
        </p>
        <p>{data.name}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default function DataDisplayer() {
  const [currentId, setCurrentId] = useState(1);

  const handleClick = () => {
    const idToFetch = Math.round(Math.random() * 80);
    setCurrentId(idToFetch);
  };

  return (
    <React.Fragment>
      <div>
        <p>Requesting ID: {currentId}</p>
        <button type="button" onClick={handleClick}>
          Fetch data!
        </button>
      </div>
      <hr />
      <FetchComponent id={currentId} />
    </React.Fragment>
  );
}
