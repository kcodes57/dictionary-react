import React, { useState } from "react";

import axios from "axios";

export default function Phonetic(props) {
  let [pronounce, setPronounce] = useState([]);

  let word = props.word;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function handleReponse(response) {
    setPronounce(response.data[0].phonetics);
  }

  axios.get(url).then(handleReponse);

  console.log(pronounce);
}
