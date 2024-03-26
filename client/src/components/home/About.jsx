import React from "react";

export default function About() {
  return (
    <div
      id="about-container"
      className="flex flex-col h-screen justify-center items-center"
    >
      <div id="col-wrapper" className="flex flex-col p-8">
        <div id="about-me-container" className="">
          <h2 className="text-3xl">About Me</h2>
          <p className="py-4">
            I am a software developer with a Bachelor of Science, Computer
            Science. I love writing code and problem solving. I have 2+ years
            experience as a sofware developer on teams of 5-7, and 3+ years
            experience making my own programs. I am most experienced in web
            development, but also have training and experience in traditional
            non-web software development with Java and C programming languages.
            I enjoy creating server-logic and web API's, but I am also
            developing my skills as a UX/UI designer. I enjoy both the creative
            and analytical aspects of programming.
          </p>
          <p className="py-4">
            I am open to work and willing to relocate if needed! I am
            comfortable with WFH, hybrid, and in person positions. I specailize
            in JavaScript, but my fundamentals are strong and I pick up new
            technology quickly.
          </p>
        </div>
        <div id="about-site-container">
          <h2 className="text-3xl">About This Website</h2>
          <p className="py-4">
            Thank you for visiting my web page! If you do not like smooth
            scroll, disable it via the navigation bar above! Additionally, My
            resume, also available above, is a much more concise version of most
            of the information here. The purpose of this web page is to showcase
            my technical skill and to act as a personal artistic outlet.
          </p>

          <ul className="flex flex-wrap">
            <li className="md:w-1/3 p-2">
              <div className="flex flex-col">
                <h1 className="p-2 max-w-fit flex items-center justify-center rounded-r-2xl bg-blue-800">
                  Bingo
                </h1>
                <p className="py-4">
                  Interactive, React app with Rest API, Websocket integration,
                  and dedicated game server. Bingo has an in-game chat and
                  responsive UI.
                </p>
              </div>
            </li>
            <li className="md:w-1/3 p-2">
              <div className="flex flex-col h-full">
                <h1 className="p-2 max-w-fit flex items-center justify-center rounded-r-2xl bg-blue-800">
                  Type Racer
                </h1>
                <p className="py-4">
                  Originally a timed self-challenge, Type Racer has evolved into
                  a demo for my string manipulation skills and third-party API
                  integration.
                </p>
              </div>
            </li>
            <li className="md:w-1/3 p-2">
              <div className="flex flex-col h-full">
                <h1 className="p-2 max-w-fit flex items-center justify-center rounded-r-2xl bg-blue-800">
                  Apple Picker
                </h1>
                <p className="py-4">
                  This simple browser game is built from scratch and utilzes
                  user input catching, randomization, object oriented
                  programming concepts, character design, and 2d grid traversal.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
