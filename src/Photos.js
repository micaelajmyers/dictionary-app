import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos app-box">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.urls.full} target="_blanket">
                  <img
                    src={photo.urls.regular}
                    alt={photo.alt_description}
                    title={photo.alt_description}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <section className="Photos d-none">
        <span>No Photos Found</span>
      </section>
    );
  }
}
