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
    <div id="projects-container" className="w-full flex-row">
      <div id="projects-header" className="w-full">
        <h1>Projects</h1>
      </div>
      <div id="projects-content" className="flex flex-col md:flex-row w-full">
        <div
          id="text-container"
          className="flex flex-col md:flex-row w-full md:w-1/2"
        >
          <div id="text-wrapper" className="w-full flex flex-col">
            <div id="text-heading" className="w-full">
              <h1>Tanknicians, LLC</h1>
            </div>
            <div id="text-body" className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <h2 className="">Business Management Platform</h2>
                <ul className="">
                  <li>UCF BS, CS Capstone Project</li>
                  <li>React App with MUI</li>
                  <li>React Native cross-platform Mobile App</li>
                  <li>Node.js server with Express</li>
                  <li>SQL database with Prisma</li>
                  <li>Atlassian suit, Agile Methodology</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="">My Role</h2>
                <ul className="">
                  <li>Client advocate</li>
                  <li>Web App UX/UI designer</li>
                  <li>Web App routing and layout architect</li>
                  <li>Front-end Software developer</li>
                  <li>Stand-up and sprint planner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="photo-container" className="flex w-full md:w-1/2">
          <PhotoCarousel photos={photos} />
        </div>
      </div>
    </div>
  );
}
