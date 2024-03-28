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

export default function MyCard(props) {
  const { title, desc, img, link, alt } = props;
  return (
    <div className="h-full">
      <h1 className="text-secondary ">Cards</h1>
    </div>
  );
}
