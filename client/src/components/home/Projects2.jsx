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
    <div id="projects-container" className="w-full md:h-screen flex-row">
      <div id="projects-header">
        <h1 className="h-fit p-4 pt-28 w-full text-5xl text-secondary">
          Projects
        </h1>
      </div>
      <div id="projects-content" className="mx-auto flex flex-col">
        <div id="tank-container" className=" lg:w-full flex lg:h-1/2 p-2">
          <div
            id="tank-text-container"
            className="flex flex-col lg:flex-row w-full lg:w-2/3"
          >
            <div id="tank-text-wrapper" className="w-full flex flex-col">
              <div id="tank-text-heading">
                <h1 className="w-full text-3xl p-2">Tanknicians, LLC</h1>
              </div>
              <div
                id="tank-text-body"
                className="w-full flex flex-col sm:flex-row p-2"
              >
                <div id="tank-block-1" className="p-2 ">
                  <h2 className="text-xl">Business Management App</h2>
                  <ul className="p-4 list-disc">
                    <li>React, React Native, MUI</li>
                    <li>Node.js with Express</li>
                    <li>SQL database with Prisma</li>
                    <li>Atlassian suit, Agile</li>
                  </ul>
                </div>
                <div id="tank-block-2" className="p-2 ">
                  <h2 className="text-xl">My Role</h2>
                  <ul className="p-4 list-disc">
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
          <div id="photo-container" className="hidden lg:flex lg:w-1/4">
            <PhotoCarousel photos={photos} />
          </div>
        </div>
        <div id="games-container" className=" lg:w-full flex lg:h-1/2 p-2">
          <div
            id="game-text-container"
            className="flex flex-col lg:flex-row w-full lg:w-2/3"
          >
            <div id="game-text-wrapper" className="w-full flex flex-col">
              <div id="game-text-heading">
                <h1 className="w-full text-3xl p-2">My Games List</h1>
              </div>
              <div
                id="game-text-body"
                className="w-full flex flex-col sm:flex-row p-2"
              >
                <div className="p-2">
                  <h2 className="text-xl">Video Game stat-tracker</h2>
                  <ul className="p-4 list-disc">
                    <li>MERN Stack Web Application</li>
                    <li>React App with Bootstrap</li>
                    <li>Node.js server with Express</li>
                    <li>MongoDB NoSQL database</li>
                  </ul>
                </div>
                <div className="p-2">
                  <h2 className="text-xl">My Role</h2>
                  <ul className="p-4 list-disc">
                    <li>Software developer</li>
                    <li>API architect</li>
                    <li>Steam API integrator</li>
                    <li>Json Web Token integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="game-photo-container" className="hidden lg:flex lg:w-1/4">
            <PhotoCarousel photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
}
