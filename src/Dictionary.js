import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let key = `441fcacb9dt020b37114da0ba3e3f5of`;
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${key}`;

  function handleReponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${searchWord}`);
    axios.get(url).then(handleReponse);
  }

  function handleWordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
