import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Photos.css";

export default function Photos(props) {
  if (props.pictures) {
    return (
      <section className="Photos">
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <div className="col-4" key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    className="img-fluid"
                    src={picture.src.landscape}
                    alt={picture.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
