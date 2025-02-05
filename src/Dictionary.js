import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${searchWord}`);
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
