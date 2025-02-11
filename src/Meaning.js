import React from "react";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>
        <em>{props.meaning.partOfSpeech}</em>
      </h4>

      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
      </p>

      <em>{props.meaning.example}</em>
      <strong>Synonyms:</strong>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}
