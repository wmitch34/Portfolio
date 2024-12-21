import React from "react";
import PhotoCarousel from "../PhotoCarousel";
import tank1 from "../../assets/photocarousel/tank-login.png";
import tank2 from "../../assets/photocarousel/tank-clients.png";
import tank3 from "../../assets/photocarousel/tank-form.png";
import tank4 from "../../assets/photocarousel/tank-analytics.png";
import game1 from "../../assets/photocarousel/gameslisthome.png";
import game2 from "../../assets/photocarousel/mygamelist.png";

const photos = [tank1, tank2, tank3, tank4, game1, game2];

export default function Projects() {
  return (
    <div
      id="projects-container"
      className="flex flex-col w-full h-full min-h-screen"
    >
      <div id="projects-header">
        <h1 className="p-4 pt-28 w-full text-5xl">Projects</h1>
      </div>
      <div
        id="projects-content"
        className="mx-auto lg:mx-0 flex flex-col lg:flex-row"
      >
        <div
          id="all-text-container"
          className="flex flex-col mx-auto w-full lg:w-1/2"
        >
          <div id="tank-container" className=" lg:w-full flex lg:h-1/2 p-2">
            <div
              id="tank-text-container"
              className="flex flex-col lg:flex-row w-full"
            >
              <div id="tank-text-wrapper" className="w-full flex flex-col">
                <div id="tank-text-heading">
                  <h2 className="w-full text-3xl p-2">Tanknicians, LLC</h2>
                </div>
                <div
                  id="tank-text-body"
                  className="w-full flex flex-col sm:flex-row p-2"
                >
                  <div id="tank-block-1" className="p-2 lg:w-1/2">
                    <h2 className="text-xl">Business Management App</h2>
                    <ul className="p-4 list-disc">
                      <li>React, React Native, MUI</li>
                      <li>Node.js with Express</li>
                      <li>SQL database with Prisma</li>
                      <li>Atlassian suit, Agile</li>
                    </ul>
                  </div>
                  <div id="tank-block-2" className="p-2 lg:w-1/2">
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
          </div>
          <div id="game-container" className=" lg:w-full flex lg:h-1/2 p-2">
            <div
              id="game-text-container"
              className="flex flex-col lg:flex-row w-full"
            >
              <div id="game-text-wrapper" className="w-full flex flex-col">
                <div id="game-text-heading">
                  <h2 className="w-full text-3xl p-2">My Games List</h2>
                </div>
                <div
                  id="game-text-body"
                  className="w-full flex flex-col sm:flex-row p-2"
                >
                  <div id="game-block-1" className="p-2 lg:w-1/2">
                    <h2 className="text-xl">Video Game stat-tracker</h2>
                    <ul className="p-4 list-disc">
                      <li>MERN Stack Web Application</li>
                      <li>React App with Bootstrap</li>
                      <li>Node.js server with Express</li>
                      <li>MongoDB NoSQL database</li>
                    </ul>
                  </div>
                  <div id="game-block-2" className="p-2 lg:w-1/2">
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
          </div>
        </div>
        <div id="photo-car-container" className="flex w-full lg:w-1/2">
          <div className="w-auto h-fit p-2">
            <PhotoCarousel photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
}
