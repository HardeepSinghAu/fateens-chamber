// Functional component version

import React, { useState, useEffect } from "react";

const initialBerries = [
  "starf",
  "razz",
  "micle",
  "pecha",
  "cheri",
  "watmel",
  "oran",
];

const BerriesHook = () => {
  let initialData = {
    berries: initialBerries,
    userInput: "",
  };

  const [data, setData] = useState(initialData);

  useEffect(
    () => {
      function fetchBerries() {
        const url = "https://pokeapi.co/api/v2/berry/?limit=100";

        fetch(url)
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            const berryNames = data.results.map((berry) => berry.name);
            setData({
              ...data,
              berries: berryNames,
            });
          })
          .catch((error) => {
            console.log("Error!", error);
          })
          .finally(() => {
            console.log("Fetch completed.");
          });
      }

      fetchBerries();
    },
    // only run on component did mount
    []
  );

  function handleOnChange(event) {
    setData({
      ...data,
      userInput: event.target.value,
    });
  }

  function getFilteredBerries() {
    if(!data.userInput) {
        return data.berries;
    }
    let filteredBerries = data.berries.filter((berry) => {
        return berry.includes(data.userInput);
    });
    return filteredBerries;
  }

  return (
    <div id="berries">
      <h1>Lucky Berries</h1>
      <h3>
        I sense a feeling... berries will bring you good luck this month...
      </h3>
      <h3>
        And that your luck will be magnified when you leave them at my chamber.
      </h3>

      <p>
        <i>Please bring any berries in the following list.</i>
      </p>
      <p>
        <b>🫐 Berry list:</b>
      </p>

      <label>Search: </label>
      <input type="text" onChange={handleOnChange}></input>
      <ul>
        {getFilteredBerries().map((berry, index) => {
          return <li key={index}>{berry}</li>;
        })}
      </ul>

      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://bulbapedia.bulbagarden.net/wiki/Berry#Generation_III"
        >
          Click here for information about berries.
        </a>
      </p>
    </div>
  );
};

export default BerriesHook;
