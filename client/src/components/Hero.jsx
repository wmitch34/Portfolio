import React from "react";
import { Image } from "react-bootstrap";
import Portrait from "../assets/portrait.png";

export default function Hero() {
  return (
    <div className="d-flex flex-wrap">
      <div className="center-both">
        <div>
          <Image
            src={Portrait}
            alt={"Portait of Will"}
            style={{ width: 300 }}
          />
        </div>
      </div>

      <div className="center-both">
        <div>
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
