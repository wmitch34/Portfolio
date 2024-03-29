import React from "react";

import bootstrap from "../../assets/icons/bootstrap.svg";
import canva from "../../assets/icons/canva.svg";
import confluence from "../../assets/icons/confluence.svg";
import figma from "../../assets/icons/figma.svg";
import javascript from "../../assets/icons/javascript.svg";
import jira from "../../assets/icons/jira.svg";
import material_ui from "../../assets/icons/material-ui.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import mysql from "../../assets/icons/mysql.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import prisma from "../../assets/icons/prisma.svg";
import react from "../../assets/icons/react.svg";
import steam from "../../assets/icons/steam.svg";
import typescript from "../../assets/icons/typescript.svg";
import vite from "../../assets/icons/vite.svg";
import PhotoCarousel from "../PhotoCarousel";

import about_web from "../../assets/about_web.png";
import about_will from "../../assets/about_will.jpg";
import about_will2 from "../../assets/about_will.png";

const photos = [about_web, about_will, about_will2];

export default function Projects() {
  return (
    <div id="projects-container" className="h-full w-full">
      <PhotoCarousel photos={photos} />
    </div>
  );
}
