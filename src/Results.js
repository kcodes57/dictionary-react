import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <h3>{props.results.phonetic}</h3>
        </section>
        <h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </h3>
      </div>
    );
  } else {
    return null;
  }
}
