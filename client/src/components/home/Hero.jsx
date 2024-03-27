import React from "react";
import Portrait from "../../assets/portrait.png";

export default function Hero() {
  return (
    <div className="flex flex-wrap w-full h-screen">
      <div
        className="w-full h-1/2 justify-center md:w-1/2 md:h-full flex items-end md:items-center md:justify-end"
        id="image-container"
      >
        <div className="w-2/3 md:w-1/2 md:text-right" id="image-wrapper">
          <img className="rounded-3xl" src={Portrait} alt={"Portait of Will"} />
        </div>
      </div>

      <div
        className="w-full h-1/2 md:w-1/2 justify-center md:justify-normal flex md:h-full md:items-center p-16"
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
