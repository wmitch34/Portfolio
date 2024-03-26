import React, { useEffect, useRef } from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Projects from "../components/home/Projects.jsx";
import Experience from "../components/home/Experience.jsx";
import Cards from "../components/home/Cards.jsx";
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
    <div className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory">
      <div className="h-screen scroll-snap-align-start">
        <Hero />
      </div>
      <div className="h-screen scroll-snap-align-start overflow-y-scroll">
        <About />
      </div>
      <div className="h-screen scroll-snap-align-start overflow-y-scroll">
        <Projects />
      </div>

      <div className="h-screen scroll-snap-align-start overflow-y-scroll">
        <Experience />
      </div>
      <div className="h-screen scroll-snap-align-start overflow-y-scroll">
        <Cards />
      </div>
    </div>
  );
}
