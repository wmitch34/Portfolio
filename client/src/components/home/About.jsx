import React from "react";

export default function About() {
  return (
    <div
      id="about-container"
      className="flex flex-col justify-centeritems-center pt-24"
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
    </div>
  );
}
