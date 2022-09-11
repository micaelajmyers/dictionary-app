import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="app-box">
          <h2>{props.results.word}</h2>
          <Phonetics phonetics={props.results.phonetics} />
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="app-box">
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
