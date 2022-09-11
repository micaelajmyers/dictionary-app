import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        if (phonetic.audio && phonetic.text) {
          return (
            <div key={index}>
              <div>
                <AudioPlayer audio={phonetic.audio} />
              </div>
              <div>{phonetic.text}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
