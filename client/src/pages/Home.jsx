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
    <div className="lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory md:px-20 lg:px-30 xl:px-40 min-w-44 overflow-x-scroll">
      <div className="h-screen overflow-y-scroll lg:snap-center ">
        <Hero />
      </div>
      <div className="lg:h-screen lg:overflow-y-scroll lg:snap-center ">
        <About />
      </div>
      <div className="lg:h-screen lg:overflow-y-scroll lg:snap-center ">
        <Experience />
      </div>
      <div className="lg:h-screen lg:overflow-y-scroll lg:snap-center ">
        <Projects />
      </div>

      <div className="lg:h-screen lg:overflow-y-scroll lg:snap-center ">
        <Cards />
      </div>
    </div>
  );
}
