import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [results, setResults] = useState(null);
  let key = `441fcacb9dt020b37114da0ba3e3f5of`;
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${key}`;

  function handleReponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    axios.get(url).then(handleReponse);
  }

  function handleWordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleWordChange} />
          <div className="hint">
            example: wine, yoga, plants, forest, sunset...
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
