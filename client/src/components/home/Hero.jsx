import React from "react";
import Portrait from "../../assets/portrait.png";

export default function Hero() {
  return (
    <div className="flex flex-wrap w-full h-full">
      <div
        id="image-container"
        className="w-full h-1/2 md:w-1/2 flex md:h-full justify-end items-end md:items-center"
      >
        <div className="mx-auto md:mr-0">
          <img
            className="rounded-3xl h-60 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96"
            src={Portrait}
            alt={"Portait of Will"}
          />
        </div>
      </div>

      <div
        className="w-full h-1/2 md:w-1/2 justify-center md:justify-normal flex md:h-full md:items-center p-16 md:pr-0"
        id="bio-container"
      >
        <div id="bio-wrapper">
          <h1 className="text-3xl">
            <i>WILL MITCHELL</i>
          </h1>
          <h2 className="text-2xl">Software Developer</h2>
          <h2 className="text-2xl">Computer Science, UCF 2023 </h2>
        </div>
      </div>
    </div>
  );
}
