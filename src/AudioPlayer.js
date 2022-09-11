import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
export default function AudioPlayer(props) {
  let audio = new Audio(props.audio);
  const start = () => {
    audio.play();
  };
  return <FontAwesomeIcon icon={faVolumeHigh} onClick={start} />;
}
