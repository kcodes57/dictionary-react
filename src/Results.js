import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <h1>
          <strong>{props.results.word}</strong>
        </h1>
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
