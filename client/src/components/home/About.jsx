import React from "react";

export default function About() {
  return (
    <div
      id="about-container"
      className="flex flex-col justify-center items-center"
    >
      <div id="col-wrapper" className="flex flex-col md:flex-col p-8 h-full">
        <div id="about-me-container" className="lg:h-1/2 py-8">
          <div id="about-me-wrapper" className="h-full">
            <h2 className="text-5xl px-2 w-full md:text-start">About Me</h2>
            <div className="md:flex">
              {/* <div className="flex md:flex-none items-center justify-center md:order-last">
                <img
                  className="rounded-full h-60 w-60 py-2"
                  src={AboutWill}
                  alt="Pic of will"
                />
              </div> */}
              <div className="my-auto">
                <p className="p-2 h-fit lg:text-2xl align-middle">
                  Hello! I am a software developer with a Computer Science
                  degree from UCF, and professional experience with a "Big 4"
                  consulting firm as a software developer and dev-ops engineer.
                  I am most experienced in web development, and I have strong
                  programming fundamentals that help me learn new technologies
                  quickly. My experience in the service industry has allowed me
                  to develop strong interpersonal skills that I leverage to
                  faciliate excellent communications with my team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="about-site-container" className="lg:h-1/2 py-8">
          <div id="about-site-wrapper" className="h-full">
            <h2 className="text-5xl px-2 w-full text-center md:text-start">
              About This Web Page
            </h2>
            <div className="md:flex">
              {/* <div className="flex md:flex-none items-center justify-center">
                <img
                  className="rounded-full h-60 py-2"
                  src={AboutWeb}
                  alt="Page Splash image"
                />
              </div> */}
              <div className="my-auto">
                <p className="p-2 h-fit lg:text-2xl align-middle">
                  The purpose of this page is to showcase my professional and
                  technical skills and to act as a personal creative outlet. My
                  resume, Github, and LinkedIn links are all available below.
                  Additionally, I have some demos that showcase some of my
                  technical ability under the "Demos" section. Thank you for
                  visiting, and please reach out via the contact form below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
