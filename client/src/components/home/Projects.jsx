import React from "react";

export default function Projects() {
  return (
    <div id="projects-container" className="flex flex-col w-full h-full">
      <div>
        <h1 className="h-fit w-full pl-8 pt-32 pb-8 text-5xl md:text-7xl">
          Projects
        </h1>
      </div>
      <div className="flex-grow">
        <div
          id="col-container"
          className="h-full flex flex-wrap flex-grow w-full justify-start xl:justify-center "
        >
          <div id="tank-container" className="w-full max-w-lg flex pb-8">
            <div id="tank-wrapper" className="w-full px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl">Tanknicians</h1>
              <h2 className="text-lg py-2">
                Business management platform, Tanknicians LLC
              </h2>
              <div className="ml-4">
                <ul className="list-disc">
                  <li>UCF BS, CS Capstone Project, 5 member team</li>
                  <li>React App with MUI</li>
                  <li>React Native cross-platform Mobile App</li>
                  <li>Node.js server with Express</li>
                  <li>SQL database with Prisma</li>
                  <li>Atlassian suit, Agile Methodology</li>
                </ul>
              </div>
              <h2 className="text-lg py-2">My Role</h2>
              <div className="ml-4">
                <ul className="list-disc">
                  <li>Client advocate</li>
                  <li>Web App UX/UI designer</li>
                  <li>Web App routing and layout architect</li>
                  <li>Front-end Software developer</li>
                  <li>Stand-up and sprint planner</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="games-container" className="w-full max-w-lg flex">
            <div id="games-wrapper" className="w-full px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl">
                My Games List
              </h1>
              <h2 className="text-lg py-2">Video Game stat-tracker</h2>
              <div className="ml-4">
                <ul className="list-disc">
                  <li>MERN Stack Web Application, 7 member team</li>
                  <li>React App with Bootstrap</li>
                  <li>Node.js server with Express</li>
                  <li>MongoDB NoSQL database</li>
                </ul>
              </div>

              <h2 className="text-lg py-2">My Role</h2>
              <div className="ml-4">
                <ul className="list-disc">
                  <li>Software developer</li>
                  <li>API architect</li>
                  <li>Json Web Token integration and security manager</li>
                  <li>Third party API integrator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
