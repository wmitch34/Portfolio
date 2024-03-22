import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-wrap w-full h-full">
      {/* <h1 className="h-fit w-full">Projects</h1> */}
      <div
        id="tank-container"
        className="w-full md:w-1/2 justify-center items-center flex"
      >
        <div className="w-full md:w-3/4 ml-8 md:mx-auto" id="tank-wrapper">
          <h1>Tanknicians</h1>
          <h2>Custom Business management platform For Tanknicians LLC</h2>
          <ul>
            <li>Senior Capstone Project, 5 member team</li>
            <li>React App with MUI</li>
            <li>React Native cross-platform Mobile App</li>
            <li>Node.js server with Express</li>
            <li>SQL database with Prisma</li>
            <li>Atlassian Suit, Agile Methodology</li>
          </ul>
          <h2>My Role</h2>
          <ul>
            <li>Client Advocate</li>
            <li>Web App UX/UI Designer</li>
            <li>Web App Routing and layout Architect</li>
            <li>Front-end Software developer</li>
            <li>Stand-up and Sprint planner</li>
          </ul>
        </div>
      </div>
      <div
        id="games-container"
        className="w-full md:w-1/2 justify-center items-center flex"
      >
        <div className="w-full md:w-3/4 mx-8 md:mx-auto" id="games-wrapper">
          <h1>My Games List</h1>
          <h2>Personal Video Game Library and statistics platform</h2>
          <ul>
            <li>MERN Stack Web Application, 7 member team</li>
            <li>React App with Bootstrap</li>
            <li>Node.js server with Express</li>
            <li>MongoDB NoSQL database</li>
          </ul>
          <h2>My Role</h2>
          <ul>
            <li>Software Developer</li>
            <li>API Architect</li>
            <li>Json Web Token Integration and security manager</li>
            <li>Third party API integrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
