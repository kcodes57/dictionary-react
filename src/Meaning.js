import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Results(props) {
  return (
    <div className="Meaning">
      <h3 className="speech">{props.meaning.partOfSpeech}</h3>

      <div className="definition">{props.meaning.definition}</div>

      <div className="example">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}
