import React from "react";

export default function About() {
  return (
    <div
      id="about-container"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div id="col-wrapper" className="flex flex-col p-8">
        <div id="about-me-container" className="">
          <h2 className="text-3xl">About Me</h2>
          <p className="py-4">
            Hello! I am a software developer with a Computer Science degree From
            UCF. I love writing code and problem solving. I am most experienced
            in web development, and I have strong programming foundations that
            help me learn new technologies quickly. My experience in the service
            industry has allowed me to develop strong interpersonal skills that
            I leverage to faciliate a positive evironment in every team I am a
            part of.
          </p>
        </div>
        <div id="about-site-container">
          <h2 className="text-3xl">About This Website</h2>
          <p className="py-4">
            Thank you for visiting my web page! The purpose of this page is to
            showcase my professional and technical skills and to act as a
            personal creative outlet. If you do not like smooth scroll, disable
            it via the navigation bar above. Additionally, My resume, also
            available above, is a much more concise version of the information
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
