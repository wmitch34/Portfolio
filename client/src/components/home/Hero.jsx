import React from "react";
import Portrait from "../../assets/portrait.png";

export default function Hero() {
  return (
    <div className="">
      <div className="" id="image-container">
        <div className="">
          <img src={Portrait} alt={"Portait of Will"} style={{ width: 300 }} />
        </div>

        <div id="desc-container">
          <h1>
            <i>WILL MITCHELL</i>
          </h1>
          <h2>Software Developer</h2>
          <h2>Computer Science, UCF 2023 </h2>
        </div>
      </div>
    </div>
  );
}
