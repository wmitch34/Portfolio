import React, { useEffect, useRef } from "react";
import Hero from "../components/home/Hero.jsx";
import Cards from "../components/home/Cards.jsx";

import "./Home.css";

import { useLocation } from "react-router-dom";

export default function Home(props) {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const history = useLocation();
  useEffect(() => {
    if (history.hash === "#about") {
      executeScroll();
    }
  }, []);

  return (
    <div className="scroll-parent">
      <div className="scroll-child">
        <Hero />
      </div>
      <div className="scroll-child">
        <Cards className="scroll-child" />
      </div>
    </div>
  );
}
