import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function Phonetics(props) {
  return (
    <div className="Phonetics d-flex align-items-center">
      {props.phonetics.map(function (phonetic, index) {
        if (phonetic.audio && phonetic.text) {
          return (
            <div
              className="ps-4 d-flex flex-wrap align-items-center"
              key={index}
            >
              <div>
                <AudioPlayer audio={phonetic.audio} />
              </div>
              <div className="ps-2">{phonetic.text}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
