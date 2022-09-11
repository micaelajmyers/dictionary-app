import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />
                <div className="Example">
                  <em>{definition.example}</em>
                </div>
              </p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
              </p>
            </div>
          );
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
