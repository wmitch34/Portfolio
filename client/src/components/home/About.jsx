import React from "react";

export default function About() {
  return (
    <div
      id="about-container"
      className="flex flex-col justify-center h-full items-center pt-24"
    >
      <h2 className="text-5xl p-2 w-full md:text-start text-textSecondary">
        About Me
      </h2>

      <p className="p-2 align-middle">
        Hello! I am a software developer with a Computer Science degree from
        UCF, and professional experience with a "Big 4" consulting firm as a
        software developer and dev-ops engineer. I am most experienced in web
        development, and I have strong programming fundamentals that help me
        learn new technologies quickly. My experience in the service industry
        has allowed me to develop strong interpersonal skills that I leverage to
        faciliate excellent communications with my team.
      </p>

      <h2 className="text-5xl p-2 w-full md:text-start text-textSecondary">
        About This Web Page
      </h2>

      <p className="p-2 align-middle">
        The purpose of this page is to showcase my professional and technical
        skills and to act as a personal creative outlet. My resume, Github, and
        LinkedIn links are all available below. Additionally, I have some demos
        that showcase some of my technical ability under the "Demos" section.
        Thank you for visiting, and please reach out via the contact form below.
      </p>
    </div>
  );
}
