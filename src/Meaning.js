import React from "react";

export default function Results(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>
        <em>{props.meaning.partOfSpeech}</em>
      </h4>
      <p>{props.meaning.definition}</p>
    </div>
  );
}
