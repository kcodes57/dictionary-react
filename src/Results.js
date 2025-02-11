import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>
          <strong>{props.results.word}</strong>
        </h1>

        <h2>
          {props.results.phonetic}
          <Phonetic word={props.results.word} />
        </h2>
        <h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </h3>
      </div>
    );
  } else {
    return null;
  }
}
