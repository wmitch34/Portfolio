import React from "react";
import Deloitte from "../../assets/experience/Deloitte.png";
import Grad from "../../assets/experience/Grad.png";
import Marlows from "../../assets/experience/marlows.png";

export default function Experience() {
  return (
    <div id="projects-container" className="flex flex-col w-full h-full">
      <div>
        <h1 className="h-fit p-4 pt-28 w-full text-5xl">Experience</h1>
      </div>
      <div id="col-wrapper" className="flex flex-col">
        <div id="deloitte-container">
          <div id="deloitte-content" className="md:flex w-full">
            <img
              className="rounded-3xl h-80 w-80 md:h-60 md:w-60 p-4"
              src={Deloitte}
              alt="Deloitte leaders pic"
            />
            <div id="deloitte-text" className="p-4">
              <h2 className="text-xl md:text-3xl">Deloitte</h2>
              <h3 className="text-md md:text-xl py-2">
                Summer Solutions Intern
              </h3>
              <p className="lg:text-lg ">
                During Summer 2023, I was a Solutions Analyst Intern (Software
                Developer) for Deloitte Consulting. I worked on a large, legacy
                web application. I analyzed and resolved defects in an upcoming
                software update using java, MySQL and the Windows suite. I
                learned about the professional software development workflow and
                life cycle. It was a productive summer, and I recieved an offer
                to come back and work full time as a software developer.
              </p>
            </div>
          </div>
        </div>
        <div id="ucf-container">
          <div id="ucf-content" className="md:flex w-full">
            <img
              className="rounded-3xl h-80 w-80 md:h-60 md:w-60 p-4"
              src={Grad}
              alt="Will Grad pic"
            />
            <div id="ucf-text" className="p-4 w-full md:w-5/6">
              <h2 className="text-xl md:text-3xl">
                University of Central Florida
              </h2>
              <h3 className="text-md md:text-xl py-2">
                Undergraduate Learning Assistant
              </h3>
              <p className="lg:text-lg ">
                For the Fall 2022 semester, I was invited to work as a TA for my
                Computer Science 1 (CS1) professor. My primary role was to hold
                one-on-one and group-study tutoring sessions for CS1 Students 3
                times a week. During my office hours I helped students grasp
                fundamental concepts of programming such as runtime analysis,
                data storage, and data sorting algorithms. I am proud that many
                of my students went from struggling with programming concepts to
                passing their CS program entrance exam on the first try!
              </p>
            </div>
          </div>
        </div>
        <div id="marlows-container">
          <div id="marlows-content" className="md:flex w-full">
            <img
              className="rounded-3xl h-80 w-80 md:h-60 md:w-60 p-4"
              src={Marlows}
              alt="Marlow's Logo"
            />
            <div id="marlows-text" className="p-4 w-full md:w-5/6">
              <h2 className="text-xl md:text-3xl">Marlow's Tavern</h2>
              <h3 className="text-md md:text-xl py-2">
                Server | Bartender | Trainer
              </h3>
              <p className="lg:text-lg ">
                I work part time at Marlow's Tavern, a sit-down restaurant and
                bar. I started as a server and eventually was promoted to
                barteneder and trainer. During my time in the service industry,
                I learned how to manage a high-stress environment, make
                decisions, and collaborate with all types of personalities. I
                work with a large staff and hundreds of guests. I've learned how
                to anticipate the needs of those guests and my coworkers to
                provide excellent service and make all my shifts a great
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
