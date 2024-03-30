import React from "react";
import { Link } from "react-router-dom";

import ApplePickerThumb from "../../assets/thumbnails/applePickerThumb.png";
import BingoThumb from "../../assets/thumbnails/bingoThumb2.jpg";
import TypeRacerThumb from "../../assets/thumbnails/typeRacerThumb.png";

const bingoDesc =
  "Test your Bingo skills against the world's finest players over the web.";
const applePickerDesc =
  "Collect apples as they fall and use the seeds to plant new trees!";
const typeRacerDesc =
  "Blaze through bite-sized typing promps to improve your skills as a typist.";

export default function Demo(props) {
  const { title, desc, img, link, alt } = props;
  return (
    <div className="h-full">
      <div id="Demos-title-container">
        <h1>Demos</h1>
      </div>
      <div id="Demo-card-container"></div>
      <div id="Bingo-card-container" className=""></div>
      <div id="ApplePicker-card-container" className=""></div>
      <div id="TypeRacer-card-container" className=""></div>
    </div>
  );
}
