import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return props.synonyms.map(function (synonym, index) {
      return <span key={index}> {synonym}</span>;
    });
  } else {
    return null;
  }
}
