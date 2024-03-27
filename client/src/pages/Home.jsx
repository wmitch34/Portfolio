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
    <div className="md:h-screen md:overflow-y-scroll md:snap-y snap-mandatory">
      <div className="md:h-screen overflow-y-scroll md:snap-center ">
        <Hero />
      </div>
      <div className="md:h-screen overflow-y-scroll md:snap-center ">
        <About />
      </div>
      <div className="md:h-screen overflow-y-scroll md:snap-center ">
        <Projects />
      </div>

      <div className="md:h-screen overflow-y-scroll md:snap-center ">
        <Experience />
      </div>
      <div className="md:h-screen overflow-y-scrollmd:snap-center ">
        <Cards />
      </div>
    </div>
  );
}
