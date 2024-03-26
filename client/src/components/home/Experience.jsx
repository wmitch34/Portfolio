import React from "react";
import Deloitte from "../../assets/Deloitte.png";
import Grad from "../../assets/Grad.png";
import Marlows from "../../assets/marlows.png";

export default function Experience() {
  return (
    <div id="projects-container" className="flex flex-col w-full h-full">
      <div>
        <h1 className="h-fit px-8 w-full py-8 text-5xl md:text-7xl">
          Experience
        </h1>
      </div>
      <div id="col-wrapper" className="flex flex-col flex-grow">
        <div id="deloitte-container">
          <div id="delpoitte-wrapper flex">
            <div id="deloitte-content" className="lg:flex">
              <div
                id="deloitte-image-container"
                className="flex items-center justify-center w-full h-full md:h-2/3 md:w-2/3 lg:w-1/4 lg:h-1/6 rounded-xl lg:py-8 px-8"
              >
                <img
                  src={Deloitte}
                  alt="Will with Deloitte Leadership"
                  className="w-full rounded-xl"
                />
              </div>
              <div id="deloitte-text" className="p-8 w-full md:w-2/3">
                <h2 className="text-3xl">Deloitte</h2>
                <h3 className="text-xl py-2">Summer Solutions Intern</h3>
                <p className="text-xl">
                  I accepted a positon as a Solutions Analyst Intern (Software
                  Developer) for Deloitte Consulting for Summer 2023. I was a
                  full stack software developer on a Government and Public
                  Services project. It was code-focused, and I got hands on
                  experience with a large, legacy web application. I analyzed
                  and addressed defects in an upcoming software update. I used
                  java, MySQL and the Windows suite for presentation and
                  communication. I met many great people and learned alot about
                  prefessional software development workflow and life cycle. My
                  preformance was excellent, and I recieved an offer to come
                  back and work full time as a software developer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="ucf-container">
          <div id="ucf-wrapper flex">
            <div id="ucf-content" className="lg:flex">
              <div
                id="grad-image-container"
                className="flex items-center justify-center w-full h-full md:h-2/3 md:w-2/3 lg:w-1/4 lg:h-1/6 rounded-xl lg:py-8 px-8"
              >
                <img src={Grad} alt="Will Grad pic" className="w-full" />
              </div>

              <div id="ucf-text" className="p-8 w-full md:w-2/3">
                <h2 className="text-3xl">University of Central Florida</h2>
                <h3 className="text-xl py-2">
                  Undergraduate Learning Assistant
                </h3>
                <p className="text-xl justify-center">
                  For the Fall 2022 semester, I was invited to work as a TA for
                  my Computer Science 1 (CS1) professor. My primary role was to
                  hold tutoring sessions for CS1 students. I offered one-on-one
                  and group-study sessions 3 times a week. During my office
                  hours I helped students grasp fundamental concepts of
                  programming such as runtime analysis, data storage, sorting,
                  and retrieval algorithms. The class used the C programming
                  language, so in addition to teaching course materials, I
                  helped many students understand the technically demanding C
                  programming language -- particulaly memory management! At UCF,
                  CS1 is the prerequisite and basis for the CS program's
                  entrance exam. I am most proud of my students who went from
                  struggling with basic programming to passing their entrance
                  exam on the first try!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="marlows-container">
          <div id="marlows-wrapper">
            <div id="marlows-content" className="lg:flex">
              <img
                src={Marlows}
                alt="Will Grad pic"
                className="w-full h-full md:h-1/2 md:w-1/2 lg:w-1/4 lg:h-1/6 rounded-xl lg:py-8 px-8"
              />
              <div id="marlows-text" className="p-8">
                <h2 className="text-3xl">Marlow's Tavern</h2>
                <h3 className="text-xl py-2">Server | Bartender | Trainer</h3>

                <p className="text-xl">
                  Throughout my Undergradute degree, I worked part time at
                  Marlow's Tavern, a sit-down restaurant and bar. I started as a
                  server; through consistency and hard work, I was promoted and
                  trained as a barteneder and certified trainer. It is hard to
                  overstate how impactful my time working in a restuarant was
                  for my professional development. I learned how to manage a
                  high-stress environment, make decisions, accept and learn from
                  failure, and collaborate with all types of personalities. I
                  worked with a large staff and hundreds (maybe thousands!) of
                  guests. I learned how to anticipate the needs of both my
                  coworkers and my guests to provide excellent service and make
                  my workplace as efficient and comfortable as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
