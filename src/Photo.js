import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Photo(props) {
  if (props.pictures) {
    console.log(props.pictures);
    return (
      <section className="Photos">
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <img key={index} src={picture.src.landscape} alt={picture.alt} />
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
