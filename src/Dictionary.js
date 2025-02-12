import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photo";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [results, setResults] = useState(null);
  let [picture, setPicture] = useState(null);
  let dictionaryKey = `441fcacb9dt020b37114da0ba3e3f5of`;
  let dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${dictionaryKey}`;
  let pictureKey = "441fcacb9dt020b37114da0ba3e3f5of";
  let pictureUrl = `https://api.shecodes.io/images/v1/search?query=${searchWord}&key=${pictureKey}`;

  function handleReponse(response) {
    setResults(response.data);
  }

  function handlePictureReponse(response) {
    console.log(response.data);
    setPicture(response.data);
  }

  function search(event) {
    event.preventDefault();

    axios.get(dictionaryUrl).then(handleReponse);
    axios.get(pictureUrl).then(handlePictureReponse);
  }

  function handleWordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="What word do you want to look up?"
            onChange={handleWordChange}
          />
          <div className="hint">
            example: wine, yoga, plants, forest, sunset...
          </div>
        </form>
      </section>
      <Results results={results} />
      <Photos pictures={picture} />
    </div>
  );
}
